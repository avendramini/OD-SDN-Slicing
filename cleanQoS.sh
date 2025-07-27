#!/bin/bash

for bridge in $(sudo ovs-vsctl list-br); do
  for port in $(sudo ovs-vsctl list-ports $bridge); do
    sudo ovs-vsctl clear Port $port qos
  done
done

for qos in $(sudo ovs-vsctl list qos | grep _uuid | awk '{print $3}'); do
  sudo ovs-vsctl -- --if-exists destroy qos $qos
done

for queue in $(sudo ovs-vsctl list queue | grep _uuid | awk '{print $3}'); do
  sudo ovs-vsctl -- --if-exists destroy queue $queue
done