#!/usr/bin/python3

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import OVSKernelSwitch, RemoteController
from mininet.cli import CLI
from mininet.link import TCLink

import os 

N_HOSTS = 12
N_SWITCHES = 6

LINKS = [
    ["s1", "s2",1,1],
    ["s1", "s3",2,1],
    ["s1", "s4",3,1],
    ["s4", "s5",2,1],
    ["s4", "s6",3,1]
]

HOST_LINKS = [
    ["h1", "s1",1,4],  # DB Server
    ["h2", "s1",1,5],  # PC Admin 1
    ["h3", "s1",1,6],  # PC Admin 2
    ["h4", "s2",1,2],  # IP Camera
    ["h5", "s2",1,3],  # Security Server
    ["h6", "s3",1,2],  # Store PC 1
    ["h7", "s3",1,3],  # Store Control PC
    ["h8", "s5",1,2],   # Sensor Control PC
    ["h9", "s5",1,3],   # IoT Sensors
    ["h10", "s6",1,2],  # Web Server
    ["h11", "s6",1,3],  # Wi-Fi AP
    ["h12", "s6",1,4]   # Wi-Fi Control PC
]

class Topology(Topo):
    def __init__(self):
        Topo.__init__(self)
        
        
        for i in range(N_SWITCHES):
            sconfig = {"dpid": "%016x" % (i + 1)}
            self.addSwitch("s%d" % (i + 1), **sconfig)
        
        for i in range(N_HOSTS):
            self.addHost("h%d" % (i + 1), inNamespace=True, ip=f"192.168.1.{i+1}/24", mac=f"00:00:00:00:01:{i+1:02x}")
            #host.cmd("sysctl net.ipv6.conf.all.disable_ipv6=1") 

        for link in LINKS:
            self.addLink(link[0], link[1], port1=link[2], port2=link[3])
        
        for link in HOST_LINKS:
            self.addLink(link[0], link[1], port1=link[2], port2=link[3])

def setOpenFlow13(net):
    for i in range(1, N_SWITCHES + 1):
        switch = f"s{i}"
        os.system(f"ovs-vsctl set Bridge {switch} protocols=OpenFlow13")
        print(f"Set OpenFlow 1.3 for {switch}")
        os.system(f"ovs-vsctl set-manager ptcp:6632")

def applyQosRules(net, max_rate=10000000, min_rate=1000000):
    print("\nApplying QoS rules to host-facing interfaces...")
    for link in HOST_LINKS:
        switch_name = link[1]
        switch_port_num = link[3]
        
        port_name = f"{switch_name}-eth{switch_port_num}"

        qos_id = "@qos"
        queue_id = "@queue"

        command = (
            f"sudo ovs-vsctl -- --id={queue_id} create queue "
            f"other-config:max-rate={max_rate} other-config:min-rate={min_rate} "
            f"-- --id={qos_id} create qos type=linux-htb queues:0={queue_id} "
            f"other-config:max-rate={max_rate} "
            f"-- set port {port_name} qos={qos_id}"
        )
        
        print(f"  - Setting QoS for port {port_name} on {switch_name}")
        os.system(command)
    
    print("QoS rules applied successfully.\n")

if __name__ == "__main__":
    topo = Topology()
    net = Mininet(
        topo=topo,
        controller=RemoteController('c1', ip='127.0.0.1', port=6633),
        switch=OVSKernelSwitch,
        build=False,
        autoSetMacs=True,
        autoStaticArp=True,
        link=TCLink,
    )


    net.build()
    net.start()

    setOpenFlow13(net)
    #applyQosRules(net)

    CLI(net)
    net.stop()
