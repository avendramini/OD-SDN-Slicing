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
        wsgi.register(ControllerServer)
        self.mac_to_port = {
            "0000000000000001": {
            "192.168.1.1": 4,
            "192.168.1.2": 5,
            "192.168.1.3": 6,
            "192.168.1.4": 1,
            "192.168.1.5": 1,
            "192.168.1.6": 2,
            "192.168.1.7": 2,
            "192.168.1.8": 3,
            "192.168.1.9": 3,
            "192.168.1.10":3,
            "192.168.1.11":3,
            "192.168.1.12":3

            },
            "0000000000000002": {
            "192.168.1.1": 1,
            "192.168.1.2": 1,
            "192.168.1.3": 1,
            "192.168.1.4": 2,
            "192.168.1.5": 3,
            "192.168.1.6": 1,
            "192.168.1.7": 1,
            "192.168.1.8": 1,
            "192.168.1.9": 1,
            "192.168.1.10": 1,
            "192.168.1.11": 1,
            "192.168.1.12": 1
            },
            "0000000000000003": {
            "192.168.1.1": 1,
            "192.168.1.2": 1,
            "192.168.1.3": 1,
            "192.168.1.4": 1,
            "192.168.1.5": 1,
            "192.168.1.6": 2,
            "192.168.1.7": 3,
            "192.168.1.8": 1,
            "192.168.1.9": 1,
            "192.168.1.10": 1,
            "192.168.1.11": 1,
            "192.168.1.12": 1
            },
            "0000000000000004": {
            "192.168.1.1": 1,
            "192.168.1.2": 1,
            "192.168.1.3": 1,
            "192.168.1.4": 1,
            "192.168.1.5": 1,
            "192.168.1.6": 1,
            "192.168.1.7": 1,
            "192.168.1.8": 2,
            "192.168.1.9": 2,
            "192.168.1.10": 3,
            "192.168.1.11": 3,
            "192.168.1.12": 3
            },
            "0000000000000005": {
            "192.168.1.1": 1,
            "192.168.1.2": 1,
            "192.168.1.3": 1,
            "192.168.1.4": 1,
            "192.168.1.5": 1,
            "192.168.1.6": 1,
            "192.168.1.7": 1,
            "192.168.1.8": 2,
            "192.168.1.9": 3,
            "192.168.1.10": 1,
            "192.168.1.11": 1,
            "192.168.1.12": 1
            },
            "0000000000000006": {
            "192.168.1.1": 1,
            "192.168.1.2": 1,
            "192.168.1.3": 1,
            "192.168.1.4": 1,
            "192.168.1.5": 1,
            "192.168.1.6": 1,
            "192.168.1.7": 1,
            "192.168.1.8": 1,
            "192.168.1.9": 1,
            "192.168.1.10": 2,
            "192.168.1.11": 3,
            "192.168.1.12": 4
            }
        }


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
            out_port = ofproto.OFPP_FLOOD

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

class ControllerServer(ControllerBase):
    def __init__(self, req, link, data, **config):
        super(ControllerServer, self).__init__(req, link, data, **config)
        path = "%s/html/" % PATH
        self.static_app = DirectoryApp(path)
        
    @route('topology', '/{filename:[^/]*}')
    def static_handler(self, req, **kwargs):
        if kwargs['filename']:
            req.path_info = kwargs['filename']
        return self.static_app(req)
        
app_manager.require_app('ryu.app.rest_topology')
app_manager.require_app('ryu.app.ws_topology')
app_manager.require_app('ryu.app.ofctl_rest')