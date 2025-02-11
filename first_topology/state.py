from enum import Enum

class State(Enum):
    STATE_ONE = 1
    STATE_TWO = 2
    STATE_THREE = 3

class MacToPortMapper:
    def __init__(self):
        self.state = State.STATE_ONE

    def set_state(self, state):
        if isinstance(state, State):
            self.state = state
        else:
            raise ValueError("Invalid state")

    def get_mac_to_port_map(self):
        if self.state == State.STATE_ONE:
            return {"00:00:00:00:00:01": 1, "00:00:00:00:00:02": 2}
        elif self.state == State.STATE_TWO:
            return {"00:00:00:00:00:03": 3, "00:00:00:00:00:04": 4}
        elif self.state == State.STATE_THREE:
            return {"00:00:00:00:00:05": 5, "00:00:00:00:00:06": 6}
        else:
            return {}

