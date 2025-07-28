.PHONY: run-topology run-controller run-gui

run-topology:
	@echo "Running topology..."
	@./cleanDB.sh
	@./cleanQoS.sh
	@sudo mn -c
	@sudo python3 first_topology/topology.py

run-controller: set-rest-qos-file
	@echo "Running controller..."
	@ryu-manager first_topology/controller.py --observe-links

set-rest-qos-file:
	@echo "Setting REST QoS file..."
	@cp ./rest_qos.py ./externals/ryu/ryu/app/rest_qos.py
