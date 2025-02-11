#!/usr/bin/python3

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import OVSKernelSwitch, RemoteController
from mininet.cli import CLI
from mininet.link import TCLink

N_HOSTS = 10
N_SWITCHES = 5

LINKS = [
    ["s1", "s2"],
    ["s2", "s1"],
    ["s1", "s3"],
    ["s3", "s1"],
    ["s1", "s4"],
    ["s4", "s1"],
    ["s2", "s5"],
    ["s5", "s2"]
]

HOST_LINKS = [
    ["h1", "s1"],  # DB Server
    ["h2", "s2"],  # PC Admin 1
    ["h3", "s2"],  # PC Admin 2
    ["h4", "s2"],  # Sensori IoT
    ["h5", "s3"],  # PC Negozio 1
    ["h6", "s3"],  # PC Negozio 2
    ["h7", "s4"],  # Web Server
    ["h8", "s4"],  # Wi-Fi AP
    ["h9", "s5"],  # Telecamera IP
    ["h10", "s5"]  # Server Sicurezza
]

class Topology(Topo):
    def __init__(self):
        Topo.__init__(self)
        
        link_config = dict(bw=10)
        host_link_config = dict()
        
        for i in range(N_SWITCHES):
            sconfig = {"dpid": "%016x" % (i + 1)}
            self.addSwitch("s%d" % (i + 1), **sconfig)
        
        for i in range(N_HOSTS):
            self.addHost("h%d" % (i + 1), inNamespace=True, ip=f"192.168.1.{i+1}/24", mac=f"00:00:00:00:01:{i+1:02x}")
        
        for link in LINKS:
            self.addLink(link[0], link[1], **link_config)
        
        for link in HOST_LINKS:
            self.addLink(link[0], link[1], **host_link_config)

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
    CLI(net)
    net.stop()
