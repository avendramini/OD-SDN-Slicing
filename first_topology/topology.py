#!/usr/bin/python3

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import OVSKernelSwitch, RemoteController
from mininet.cli import CLI
from mininet.link import TCLink

N_HOSTS = 10
N_SWITCHES = 5

LINKS = [
    ["s1", "s2",1,1],
    ["s1", "s3",2,1],
    ["s1", "s4",3,1],
    ["s2", "s5",2,1]
]

HOST_LINKS = [
    ["h1", "s1",1,4],  # DB Server
    ["h2", "s2",1,3],  # PC Admin 1
    ["h3", "s2",1,4],  # PC Admin 2
    ["h4", "s2",1,5],  # Sensori IoT
    ["h5", "s3",1,2],  # PC Negozio 1
    ["h6", "s3",1,3],  # PC Negozio 2
    ["h7", "s4",1,2],  # Web Server
    ["h8", "s4",1,3],  # Wi-Fi AP
    ["h9", "s5",1,2],  # Telecamera IP
    ["h10", "s5",1,3]  # Server Sicurezza
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
            #host.cmd("sysctl net.ipv6.conf.all.disable_ipv6=1") 

        for link in LINKS:
            self.addLink(link[0], link[1], **link_config, port=link[2], port2=link[3])
        
        for link in HOST_LINKS:
            self.addLink(link[0], link[1], **host_link_config, port=link[2], port2=link[3])

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

    for h in net.hosts:
        h.cmd("sysctl -w net.ipv6.conf.all.disable_ipv6=1")
        h.cmd("sysctl -w net.ipv6.conf.default.disable_ipv6=1")
        h.cmd("sysctl -w net.ipv6.conf.lo.disable_ipv6=1")

    for sw in net.switches:
        sw.cmd("sysctl -w net.ipv6.conf.all.disable_ipv6=1")
        sw.cmd("sysctl -w net.ipv6.conf.default.disable_ipv6=1")
        sw.cmd("sysctl -w net.ipv6.conf.lo.disable_ipv6=1")
    net.build()
    net.start()
    CLI(net)
    net.stop()
