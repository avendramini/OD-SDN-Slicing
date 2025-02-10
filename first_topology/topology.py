#!/usr/bin/python3

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import OVSKernelSwitch, RemoteController
from mininet.cli import CLI
from mininet.link import TCLink
import subprocess

N_HOSTS=6
N_SWITCHES=2
LINKS=[["s1","s2"]]
HOST_LINKS=[["h1","s1"],["h2","s1"],["h3","s1"],["h4","s2"],["h5","s2"],["h6","s2"]]

class Topology(Topo):
    def __init__(self):
        # Initialize topology
        Topo.__init__(self)

        link_config = dict(bw=10)
        host_link_config = dict()

        
        for i in range(N_SWITCHES):
            sconfig = {"dpid": "%016x" % (i + 1)}
            self.addSwitch("s%d" % (i + 1), **sconfig)

        
        for i in range(N_HOSTS):
            self.addHost("h%d" % (i + 1), inNamespace=True, ip=f"192.168.0.{i+1}/24",mac=f"00:00:00:00:00:{i:02x}")
            

        # Add router links
        for link in LINKS:
            self.addLink(link[0], link[1], **link_config)
        

        # Add clients-router1 and clients-router2 links
        for link in HOST_LINKS:
            self.addLink(link[0], link[1], **host_link_config)



if __name__ == "__main__":
    topo = Topology()
    net = Mininet(
        topo=topo,
        

        controller=RemoteController( 'c1', ip='127.0.0.1',port=6633), 
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