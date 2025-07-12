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
        
        # Non attivare slice di default - il sistema parte vuoto
        # self._activate_all_slices()

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
                if len(self.map[x]) == 0:
                    del self.map[x]
        for i in range(len(self.active_slice)):
            if self.active_slice[i] == 1:
                self.add_slice(i + 1)
        return True
    def reset_map(self):
        self.map.clear()
        self.active_slice = [0] * 13
    def get_map(self):
        return self.map
    
    def _activate_all_slices(self):
        """Attiva tutti gli slice di default se compatibili"""
        activated_slices = []
        for slice_id in range(1, st.NUM_SLICES + 1):
            if self.verify_add_compatibility(slice_id):
                self.active_slice[slice_id - 1] = 1
                activated_slices.append(slice_id)
                for x in st.SLICES_RULES[slice_id - 1]:
                    for y in st.SLICES_RULES[slice_id - 1][x]:
                        if x not in self.map:
                            self.map[x] = {}
                        self.map[x][y] = st.SLICES_RULES[slice_id - 1][x][y]
        print(f"Slices attivati di default: {activated_slices}")
        print(f"Stato active_slice: {self.active_slice}")
        print(f"Numero di regole nella mappa: {len(self.map)}")
    
    def get_active_slices(self):
        """Restituisce la lista degli slice attualmente attivi"""
        return [i + 1 for i, active in enumerate(self.active_slice) if active == 1]
    
    def get_active_slices_status(self):
        """Restituisce il dettaglio dello stato degli slice"""
        return {
            'active_slices': self.get_active_slices(),
            'active_slice_array': self.active_slice,
            'total_rules': len(self.map),
            'switches_with_rules': len(self.map.keys()) if self.map else 0
        }
