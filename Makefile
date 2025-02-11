.PHONY: run-topology run-controller run-gui

run-topology:
	@echo "Running topology..."
	@sudo mn -c
	@sudo python3 first_topology/topology.py

run-controller:
	@echo "Running controller..."
	@ryu-manager first_topology/controller.py
run-gui:
	@echo "Running GUI..."
	@ryu-manager first_topology/controller.py ./externals/ryu/ryu/app/gui_topology/gui_topology.py	
