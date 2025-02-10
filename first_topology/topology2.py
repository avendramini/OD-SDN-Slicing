#!/usr/bin/python3

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import OVSKernelSwitch, RemoteController
from mininet.cli import CLI
from mininet.link import TCLink

class CustomTopo(Topo):
    def __init__(self):
        Topo.__init__(self)

        link_config = dict(bw=10)

        # Creazione switch per le diverse zone
        s_control = self.addSwitch("s1", dpid="0000000000000001")  # Zona di controllo
        s_admin = self.addSwitch("s2", dpid="0000000000000002")  # Zona amministrativa
        s_shops = self.addSwitch("s3", dpid="0000000000000003")  # Zona negozi/ristoranti
        s_wifi = self.addSwitch("s4", dpid="0000000000000004")  # Zona Wi-Fi
        s_security = self.addSwitch("s5", dpid="0000000000000005")  # Zona sicurezza

        # Creazione host
        db_server = self.addHost("h1", ip="192.168.1.1/24", mac="00:00:00:00:01:01")  # Server Database
        pc_admin1 = self.addHost("h2", ip="192.168.1.2/24", mac="00:00:00:00:01:02")  # PC Amministrativo 1
        pc_admin2 = self.addHost("h3", ip="192.168.1.3/24", mac="00:00:00:00:01:03")  # PC Amministrativo 2
        sensors = self.addHost("h4", ip="192.168.1.4/24", mac="00:00:00:00:01:04")  # Sensori IoT
        pc_shop1 = self.addHost("h5", ip="192.168.1.5/24", mac="00:00:00:00:01:05")  # PC Negozio 1
        pc_shop2 = self.addHost("h6", ip="192.168.1.6/24", mac="00:00:00:00:01:06")  # PC Negozio 2
        web_server = self.addHost("h7", ip="192.168.1.7/24", mac="00:00:00:00:01:07")  # Web Server
        wifi_ap = self.addHost("h8", ip="192.168.1.8/24", mac="00:00:00:00:01:08")  # Access Point Wi-Fi
        camera_ip = self.addHost("h9", ip="192.168.1.9/24", mac="00:00:00:00:01:09")  # Telecamere IP
        security_server = self.addHost("h10", ip="192.168.1.10/24", mac="00:00:00:00:01:10")  # Server Sicurezza

        # Collegamenti tra host e switch
        self.addLink(db_server, s_control, **link_config)
        self.addLink(pc_admin1, s_admin, **link_config)
        self.addLink(pc_admin2, s_admin, **link_config)
        self.addLink(sensors, s_admin, **link_config)
        self.addLink(pc_shop1, s_shops, **link_config)
        self.addLink(pc_shop2, s_shops, **link_config)
        self.addLink(web_server, s_wifi, **link_config)
        self.addLink(wifi_ap, s_wifi, **link_config)
        self.addLink(camera_ip, s_security, **link_config)
        self.addLink(security_server, s_security, **link_config)

        # Collegamenti tra switch
        self.addLink(s_control, s_admin, **link_config)
        self.addLink(s_admin, s_shops, **link_config)
        self.addLink(s_admin, s_security, **link_config)
        self.addLink(s_shops, s_wifi, **link_config)
        self.addLink(s_wifi, s_security, **link_config)

if __name__ == "__main__":
    topo = CustomTopo()
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
