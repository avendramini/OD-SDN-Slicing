#!/bin/bash

sudo systemctl stop openvswitch-switch
sudo pkill -f ovsdb-server
sudo pkill -f ovs-vswitchd
sudo rm -f /etc/openvswitch/conf.db
sudo ovsdb-tool create /etc/openvswitch/conf.db /usr/share/openvswitch/vswitch.ovsschema
sudo systemctl start openvswitch-switch