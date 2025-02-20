from ProblemConstants import ProblemConstants as st

class MacToPortMapper:
    def __init__(self):
        self.map = {}
        self.active_slice = [0] * 13
        self.adjacency_list = [[] for _ in range(st.NUM_SLICES)]

        for pair in st.INCOMPATIBLE_SLICES:
            a, b = pair[0] - 1, pair[1] - 1
            self.adjacency_list[a].append(b)
            self.adjacency_list[b].append(a)

    def verify_add_compatibility(self, slice_number):
        for i in self.adjacency_list[slice_number - 1]:
            if self.active_slice[i] == 1:
                return False
        return True

    def add_slice(self, slice_number):
        if self.verify_add_compatibility(slice_number):
            self.active_slice[slice_number - 1] = 1
            for x in st.SLICES_RULES[slice_number - 1]:
                for y in st.SLICES_RULES[slice_number - 1][x]:
                    if x not in self.map:
                        self.map[x] = {}
                    self.map[x][y] = st.SLICES_RULES[slice_number - 1][x][y]
            return True
        return False

    def remove_slice(self, slice_number):
        self.active_slice[slice_number - 1] = 0
        for x in st.SLICES_RULES[slice_number - 1]:
            for y in st.SLICES_RULES[slice_number - 1][x]:
                del self.map[x][y]
        return True
    def reset_map(self):
        self.map.clear()
        self.active_slice = [0] * 13
    def get_map(self):
        return self.map
