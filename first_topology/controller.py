# Copyright (C) 2011 Nippon Telegraph and Telephone Corporation.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
# implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import os

from ryu.base import app_manager
from ryu.app.wsgi import ControllerBase, WSGIApplication, route
from webob.static import DirectoryApp

from ryu.controller import ofp_event
from ryu.controller.handler import CONFIG_DISPATCHER, MAIN_DISPATCHER
from ryu.controller.handler import set_ev_cls
from ryu.ofproto import ofproto_v1_3
from ryu.lib.packet import packet
from ryu.lib.packet import ethernet
from ryu.lib.packet import ether_types
from ryu.lib.packet import ipv4
from ProblemConstants import ProblemConstants as st
from webob import Response
from MacToPortMapper import MacToPortMapper

PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
print(PATH)

class Controller(app_manager.RyuApp):
    OFP_VERSIONS = [ofproto_v1_3.OFP_VERSION]
    _CONTEXTS = {
        'wsgi': WSGIApplication,
    }
    def __init__(self, *args, **kwargs):
        super(Controller, self).__init__(*args, **kwargs)
        wsgi = kwargs['wsgi']
        wsgi.register(ControllerServer, {"controller_instance": self})
        self.mac_to_port = {}

    @set_ev_cls(ofp_event.EventOFPSwitchFeatures, CONFIG_DISPATCHER)
    def switch_features_handler(self, ev):
        datapath = ev.msg.datapath
        ofproto = datapath.ofproto
        parser = datapath.ofproto_parser

        # install table-miss flow entry
        #
        # We specify NO BUFFER to max_len of the output action due to
        # OVS bug. At this moment, if we specify a lesser number, e.g.,
        # 128, OVS will send Packet-In with invalid buffer_id and
        # truncated packet data. In that case, we cannot output packets
        # correctly.  The bug has been fixed in OVS v2.1.0.
        match = parser.OFPMatch()
        actions = [parser.OFPActionOutput(ofproto.OFPP_CONTROLLER,
                                          ofproto.OFPCML_NO_BUFFER)]
        self.add_flow(datapath, 0, match, actions)

    def add_flow(self, datapath, priority, match, actions, buffer_id=None):
        ofproto = datapath.ofproto
        parser = datapath.ofproto_parser

        inst = [parser.OFPInstructionActions(ofproto.OFPIT_APPLY_ACTIONS,
                                             actions)]
        if buffer_id:
            mod = parser.OFPFlowMod(datapath=datapath, buffer_id=buffer_id,
                                    priority=priority, match=match,
                                    instructions=inst)
        else:
            mod = parser.OFPFlowMod(datapath=datapath, priority=priority,
                                    match=match, instructions=inst)
        datapath.send_msg(mod)

    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)
    def _packet_in_handler(self, ev):
        # If you hit this you might want to increase
        # the "miss_send_length" of your switch
        if ev.msg.msg_len < ev.msg.total_len:
            self.logger.debug("packet truncated: only %s of %s bytes",
                              ev.msg.msg_len, ev.msg.total_len)

        msg = ev.msg
        datapath = msg.datapath
        ofproto = datapath.ofproto
        parser = datapath.ofproto_parser
        in_port = msg.match['in_port']

        pkt = packet.Packet(msg.data)
        eth = pkt.get_protocols(ethernet.ethernet)[0]

        if eth.ethertype == ether_types.ETH_TYPE_LLDP:
            # ignore lldp packet
            return

        dst = eth.dst
        src = eth.src

        pkt_ipv4 = pkt.get_protocol(ipv4.ipv4)
        if pkt_ipv4:
            src_ip = pkt_ipv4.src
            dst_ip = pkt_ipv4.dst
        else:
            return
        #print(src_ip+"-"+dst_ip)
        dpid = format(datapath.id, "d").zfill(16)
        self.mac_to_port.setdefault(dpid, {})

        self.logger.info("packet in %s %s %s %s", dpid, src_ip, dst_ip, in_port)

        if dst_ip in self.mac_to_port[dpid]:
            out_port = self.mac_to_port[dpid][dst_ip]
            #print(out_port)
        else:
            #out_port = ofproto.OFPP_FLOOD
            return

        actions = [parser.OFPActionOutput(out_port)]

        if out_port != ofproto.OFPP_FLOOD:
            match = parser.OFPMatch(in_port=in_port, eth_dst=dst, eth_src=src)
            if msg.buffer_id != ofproto.OFP_NO_BUFFER:
                self.add_flow(datapath, 1, match, actions, msg.buffer_id)
                return
            else:
                self.add_flow(datapath, 1, match, actions)
        data = None
        if msg.buffer_id == ofproto.OFP_NO_BUFFER:
            data = msg.data

        out = parser.OFPPacketOut(datapath=datapath, buffer_id=msg.buffer_id,
                      in_port=in_port, actions=actions, data=data)
        datapath.send_msg(out)
    def reset_switches(self):
        for datapath in self.controller_instance.datapaths.values():
            ofproto = datapath.ofproto
            parser = datapath.ofproto_parser

            # Remove all flows
            empty_match = parser.OFPMatch()
            instructions = []
            flow_mod = parser.OFPFlowMod(datapath=datapath, command=ofproto.OFPFC_DELETE, 
                         out_port=ofproto.OFPP_ANY, out_group=ofproto.OFPG_ANY, 
                         match=empty_match, instructions=instructions)
            datapath.send_msg(flow_mod)

            # Remove all groups
            group_mod = parser.OFPGroupMod(datapath=datapath, command=ofproto.OFPGC_DELETE, 
                           group_id=ofproto.OFPG_ALL)
            datapath.send_msg(group_mod)

            # Remove all meters
            meter_mod = parser.OFPMeterMod(datapath=datapath, command=ofproto.OFPMC_DELETE, 
                           meter_id=ofproto.OFPM_ALL)
            datapath.send_msg(meter_mod)

            # Reinstall table-miss flow entry
            match = parser.OFPMatch()
            actions = [parser.OFPActionOutput(ofproto.OFPP_CONTROLLER, ofproto.OFPCML_NO_BUFFER)]
            self.controller_instance.add_flow(datapath, 0, match, actions)

class ControllerServer(ControllerBase):
    DAY=0
    NIGHT=1

    def __init__(self, req, link, data, **config):
        super(ControllerServer, self).__init__(req, link, data, **config)
        self.controller_instance = data["controller_instance"]
        path = "%s/html/" % PATH
        self.static_app = DirectoryApp(path)
        self.mappers = [MacToPortMapper(), MacToPortMapper()]
        self.active_mode=self.DAY

    @route('topology', '/{filename:[^/]*}')
    def static_handler(self, req, **kwargs):
        if kwargs['filename']:
            req.path_info = kwargs['filename']
        return self.static_app(req)
    
    @route('mode', '/mode/set', methods=['POST'])
    def set_mode(self, req, **kwargs):
        try:
            mode_data = req.json if req.body else {}
            mode = int(mode_data.get('mode')) if mode_data.get('mode') else None
            if mode not in [self.DAY, self.NIGHT]:
                return Response(status=400, body="Invalid mode")
            self.active_mode = mode
            active_slices = [i+1 for i, active in enumerate(self.mappers[self.active_mode].active_slice) if active]
            self.controller_instance.mac_to_port=self.mappers[self.active_mode].map
            #reset switch
            #self.controller_instance.reset_switches()
            return Response(status=200, body={"message": "Mode set successfully", "active_mode": self.active_mode, "active_slices": active_slices})
        except Exception as e:
            return Response(status=500, body=str(e))
    
    @route('slice', '/slice/add', methods=['POST'])
    def add_slice(self, req, **kwargs):
        try:
            slice_data = req.json if req.body else {}
            slice_id = int(slice_data.get('slice_id')) if slice_data.get('slice_id') else None
            mode = int(slice_data.get('mode')) if slice_data.get('mode') else None
            print(f"slice_id: {slice_id}, mode: {mode}")
            if not slice_id or slice_id > st.NUM_SLICES or mode is None or mode != self.active_mode:
                return Response(status=400, body="Incorrect parameters")
            
            if  self.mappers[self.active_mode].active_slice[slice_id-1]==1 or not self.mappers[self.active_mode].add_slice(slice_id):
                return Response(status=400, body="Failed to add slice")
            active_slices = [i+1 for i, active in enumerate(self.mappers[self.active_mode].active_slice) if active]
            self.controller_instance.mac_to_port=self.mappers[self.active_mode].map
            #reset switch
            #self.controller_instance.reset_switches()
            return Response(status=200, body={"message": "Slice added successfully", "active_mode": self.active_mode,"active_slices": active_slices})
        except Exception as e:
            return Response(status=500, body=str(e))

    @route('slice', '/slice/remove', methods=['POST'])
    def remove_slice(self, req, **kwargs):
        try:
            slice_data = req.json if req.body else {}
            slice_id = int(slice_data.get('slice_id')) if slice_data.get('slice_id') else None
            mode = int(slice_data.get('mode')) if slice_data.get('mode') else None
            if not slice_id or slice_id>st.NUM_SLICES or mode==None or mode!=self.active_mode :
                return Response(status=400, body="Incorrect parameters")
            
            if self.mappers[self.active_mode].active_slice[slice_id-1]==0 or not self.mappers[self.active_mode].remove_slice(slice_id):
                return Response(status=400, body="Failed to remove slice")
            active_slices = [i+1 for i, active in enumerate(self.mappers[self.active_mode].active_slice) if active]
            self.controller_instance.mac_to_port=self.mappers[self.active_mode].map
            #reset switch
            #self.controller_instance.reset_switches()
            return Response(status=200, body={"message": "Slice removed successfully", "active_mode": self.active_mode,"active_slices": active_slices})
        except Exception as e:
            return Response(status=500, body=str(e))
    
app_manager.require_app('ryu.app.rest_topology')
app_manager.require_app('ryu.app.ws_topology')
app_manager.require_app('ryu.app.ofctl_rest')