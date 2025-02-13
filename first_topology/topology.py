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
    ["s4", "s5",2,1],
    ["s4", "s6",3,1]
]

HOST_LINKS = [
    ["h1", "s1",1,4],  # DB Server
    ["h2", "s1",1,5],  # PC Admin 1
    ["h3", "s1",1,6],  # PC Admin 2
    ["h4", "s2",1,2],  # Telecamera IP
    ["h5", "s2",1,3],  # Server Sicurezza
    ["h6", "s3",1,2],  # PC Negozio 1
    ["h7", "s3",1,3],  # PC Negozio Controllo
    ["h8", "s5",1,2],   # PC Controllo sensori
    ["h9", "s5",1,3],   # Sensori IoT
    ["h10", "s6",1,2],  # Web Server
    ["h11", "s6",1,3],  # Wi-Fi AP
    ["h12", "s6",1,4]   # PC controllo Wi-Fi
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
            self.addLink(link[0], link[1], bw=10, port1=link[2], port2=link[3])
        
        for link in HOST_LINKS:
            self.addLink(link[0], link[1], port1=link[2], port2=link[3])

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
