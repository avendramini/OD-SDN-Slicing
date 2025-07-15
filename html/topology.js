const MAC_MASK = 256;
var slice1DayLinkIds = [ 
    { src: "0000000000000003", dst: (6+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
    { src: "0000000000000003", dst: "262" },  // host 6 (6+256=262)
    { src: "0000000000000003", dst: "263" }   // host 7 (7+256=263)
];

// slice 2
var slice2NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
    { src: "0000000000000003", dst: "263" }   // host 7 (7+256=263)
];

// slice 3
var slice3DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (9+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (10+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
    { src: "0000000000000005", dst: "265" },  // host 9 (9+256=265)
    { src: "0000000000000006", dst: "266" },  // host 10 (10+256=266)
];

// slice 4
var slice4DayLinkIds = [
    { src: "0000000000000006", dst: (10+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (11+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
    { src: "0000000000000006", dst: "266" },  // host 10 (10+256=266)
    { src: "0000000000000006", dst: "267" },  // host 11 (11+256=267)
    { src: "0000000000000006", dst: "268" },  // host 12 (12+256=268)
];

// slice 5
var slice5DayLinkIds = [
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
];


var slice5NightLinkIds = [
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
 ];

// slice 6
var slice6DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000003", dst: "263" },  // host 7 (7+256=263)
];

var slice6NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000003", dst: "263" },  // host 7 (7+256=263)
];

// slice 7
var slice7DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000006", dst: "268" },  // host 12 (12+256=268)
];

var slice7NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000006", dst: "268" },  // host 12 (12+256=268)
];

// slice 8
var slice8DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000002", dst: "261" },  // host 5 (5+256=261)
];

var slice8NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000002", dst: "261" },  // host 5 (5+256=261)
];

// slice 9
var slice9DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000005", dst: "264" },  // host 8 (8+256=264)
];

var slice9NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "258" },  // host 2 (2+256=258)
    { src: "0000000000000001", dst: "259" },  // host 3 (3+256=259)
    { src: "0000000000000005", dst: "264" },  // host 8 (8+256=264)
];


// slice 10
var slice10DayLinkIds = [
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (9+MAC_MASK).toString() },
    { src: "0000000000000005", dst: "264" },  // host 8 (8+256=264)
    { src: "0000000000000005", dst: "265" },  // host 9 (9+256=265)
];

// slice 11
var slice11NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
    { src: "0000000000000005", dst: "264" },  // host 8 (8+256=264)
];


// slice 12
var slice12DayLinkIds = [
    { src: "0000000000000002", dst: (4+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
    { src: "0000000000000002", dst: "260" },  // host 4 (4+256=260)
    { src: "0000000000000002", dst: "261" },  // host 5 (5+256=261)
];

// slice 13
var slice13NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000002", dst: "261" },  // host 5 (5+256=261)
    { src: "0000000000000001", dst: "257" },  // host 1 (1+256=257)
];





let selectedSlicesDay = [];
let selectedSlicesNight = [];
let dayMode = true;

const sliceColors = {
    1: d3.rgb(0, 102, 204),   
    2: d3.rgb(0, 102, 204),       
    3: d3.rgb(255, 123, 0),     
    4: d3.rgb(255, 123, 0),     
    5: d3.rgb(10, 205, 36),     
    6: d3.rgb(10, 205, 36),      
    7: d3.rgb(10, 205, 36),     
    8: d3.rgb(10, 205, 36),    
    9: d3.rgb(10, 205, 36),      
    10: d3.rgb(255, 20, 147),  
    11: d3.rgb(255, 20, 147),  
    12: d3.rgb(0, 189, 189),    
    13: d3.rgb(0, 189, 189),    
    14: d3.rgb(233, 7, 7) 
};



const sliceMap = [
    { checkboxId: 1, slices: [{ slice: 1, mode: 'day' }, { slice: 2, mode: 'night' }] },
    { checkboxId: 2, slices: [{ slice: 3, mode: 'day' }] },
    { checkboxId: 3, slices: [{ slice: 4, mode: 'day' }] },
    { checkboxId: 4, slices: [{ slice: 5, mode: 'day' }, { slice: 5, mode: 'night' }] },
    { checkboxId: 5, slices: [{ slice: 6, mode: 'day' }, { slice: 6, mode: 'night' }] },
    { checkboxId: 6, slices: [{ slice: 7, mode: 'day' }, { slice: 7, mode: 'night' }] },
    { checkboxId: 7, slices: [{ slice: 8, mode: 'day' }, { slice: 8, mode: 'night' }] },
    { checkboxId: 8, slices: [{ slice: 9, mode: 'day' }, { slice: 9, mode: 'night' }] },
    { checkboxId: 9, slices: [{ slice: 10, mode: 'day' }, { slice: 11, mode: 'night' }] },
    { checkboxId: 10, slices: [{ slice: 12, mode: 'day' }, { slice: 13, mode: 'night' }] },
    { checkboxId: 11, slices: [] },
];

async function callApi(endpoint, method, bodyData = null) {
    try {
        console.log(`Calling API: ${endpoint} with method: ${method} and body:`, bodyData);
        const response = await fetch(endpoint, {
            method: method.toUpperCase(), 
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData ? JSON.stringify(bodyData) : null
            
        });      

        if (!response.ok) {
            const errorText = await response.text();
            
            // Check for QoS KeyError 35020 and auto-clear if detected
            if (response.status === 500 && (errorText.includes('KeyError: 35020') || errorText.includes('KeyError: 35020'))) {
                console.log("Detected KeyError 35020 in API response - auto-clearing QoS rules...");
                
                // Only auto-clear for QoS-related endpoints to avoid infinite loops
                if (endpoint.includes('/qos/')) {
                    try {
                        // Clear all QoS rules automatically
                        const clearResult = await window.clearAllQoSRules();
                        if (clearResult) {
                            console.log("QoS rules cleared successfully due to KeyError 35020");
                            // Return null to indicate the error was handled
                            return null;
                        }
                    } catch (clearError) {
                        console.error("Failed to auto-clear QoS rules:", clearError);
                    }
                }
            }
            
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.log(`Response from ${endpoint}:`, data);
            return data;
        } else {
            console.log(`No JSON body returned from ${endpoint}`);
            return null;
        }
    } catch (error) {
        console.error('Error API:', error);
        return null;
    }
}

function updateColors() {
    console.log("=== updateColors called ===");
    console.log("Selected slices:", dayMode ? selectedSlicesDay : selectedSlicesNight, "dayMode:", dayMode);
    
    d3.selectAll(".link").attr("class", "link").style("stroke", null).style("stroke-width", null).style("stroke-opacity", null);

    const selectedSlices = dayMode ? selectedSlicesDay : selectedSlicesNight;
    const linkColors = {};
    let totalMatches = 0;

    selectedSlices.forEach(currentSlice => {
        var sliceLinkIds = dayMode 
            ? window[`slice${currentSlice}DayLinkIds`] 
            : window[`slice${currentSlice}NightLinkIds`];
        
        console.log(`Processing slice ${currentSlice}, found ${sliceLinkIds ? sliceLinkIds.length : 0} link definitions`);
        
        if (Array.isArray(sliceLinkIds) && sliceLinkIds.length > 0) {
            var sliceLinks = topo.links.filter(function(link) {
                return sliceLinkIds.some(function(id) {
                    // Converte i DPID in string per confronto consistente
                    var linkSrcStr = String(link.port.src.dpid);
                    var linkDstStr = String(link.port.dst.dpid);
                    var sliceSrcStr = String(id.src);
                    var sliceDstStr = String(id.dst);
                    
                    // Verifica entrambe le direzioni del link
                    var forward = (linkSrcStr === sliceSrcStr && linkDstStr === sliceDstStr);
                    var reverse = (linkSrcStr === sliceDstStr && linkDstStr === sliceSrcStr);
                    
                    return forward || reverse;
                });
            });

            console.log(`Slice ${currentSlice} matched ${sliceLinks.length} links`);
            totalMatches += sliceLinks.length;

            sliceLinks.forEach(function(link) {
                const linkKey = `${link.port.src.dpid}-${link.port.dst.dpid}`;
                if (!linkColors[linkKey]) {
                    linkColors[linkKey] = [];
                }
                linkColors[linkKey].push(currentSlice);
            });
        }
    });

    console.log(`Total matches: ${totalMatches}, colored links: ${Object.keys(linkColors).length}`);

    Object.keys(linkColors).forEach(linkKey => {
        const slices = linkColors[linkKey];
        const color = calculateCombinedColor(slices);
        console.log(`Applying color ${color} to link ${linkKey} for slices ${slices}`);
        d3.selectAll(".link").filter(function(d) {
            return `${d.port.src.dpid}-${d.port.dst.dpid}` == linkKey ||
                   `${d.port.dst.dpid}-${d.port.src.dpid}` == linkKey;
        }).style("stroke", color).style("stroke-width", "3px").style("stroke-opacity", "1");
    });
    
    console.log("=== updateColors completed ===");
}

function calculateCombinedColor(slices) {
    const colors = slices.map(slice => sliceColors[slice]);

    const combinedColor = colors.reduce((acc, color) => {
        acc.r += color.r;
        acc.g += color.g;
        acc.b += color.b;
        return acc;
    }, { r: 0, g: 0, b: 0 });

    const numColors = colors.length;
    combinedColor.r = Math.min(Math.round(combinedColor.r / numColors), 255);
    combinedColor.g = Math.min(Math.round(combinedColor.g / numColors), 255);
    combinedColor.b = Math.min(Math.round(combinedColor.b / numColors), 255);

    return `rgb(${combinedColor.r}, ${combinedColor.g}, ${combinedColor.b})`;
}

// Funzione per caricare lo stato di entrambe le modalità all'avvio
async function loadAllSlicesState() {
    try {
        console.log("Caricamento stato slice per entrambe le modalità...");
        
        // Carica stato modalità giorno
        const currentMode = dayMode;
        
        // Forza temporaneamente modalità giorno nel backend per ottenere gli slice
        await callApi('/mode/set', 'POST', { mode: "0" });
        const dayResponse = await callApi('/slices/status', 'GET');
        if (dayResponse && dayResponse.active_slices) {
            selectedSlicesDay = [...dayResponse.active_slices];
            console.log("Slice giorno caricati:", selectedSlicesDay);
        }
        
        // Carica stato modalità notte
        await callApi('/mode/set', 'POST', { mode: "1" });
        const nightResponse = await callApi('/slices/status', 'GET');
        if (nightResponse && nightResponse.active_slices) {
            selectedSlicesNight = [...nightResponse.active_slices];
            console.log("Slice notte caricati:", selectedSlicesNight);
        }
        
        // Ripristina la modalità originale
        const targetMode = currentMode ? "0" : "1";
        await callApi('/mode/set', 'POST', { mode: targetMode });
        
        // Aggiorna l'interfaccia
        syncCheckboxesWithState();
        updateColors();
        
        console.log("Stato completo caricato:");
        console.log("selectedSlicesDay:", selectedSlicesDay);
        console.log("selectedSlicesNight:", selectedSlicesNight);
        
    } catch (error) {
        console.error("Errore nel caricamento completo dello stato slice:", error);
    }
}

// Funzione per caricare lo stato degli slice dal backend
async function loadSliceState(skipModeUpdate = false) {
    try {
        console.log("Caricamento stato slice dal backend...");
        const response = await callApi('/slices/status', 'GET');
        
        if (response && response.active_slices) {
            console.log("Stato slice ricevuto:", response);
            
            // Imposta la modalità corrente solo se non è stato specificato di saltare l'aggiornamento
            if (!skipModeUpdate) {
                const isNightMode = response.mode === 'NIGHT';
                dayMode = !isNightMode;
                
                // Aggiorna i radio button per la modalità
                const dayRadio = document.querySelector('input[value="Day mode"]');
                const nightRadio = document.querySelector('input[value="Night mode"]');
                
                if (isNightMode) {
                    nightRadio.checked = true;
                    dayRadio.checked = false;
                    document.body.classList.add('night-mode');
                } else {
                    dayRadio.checked = true;
                    nightRadio.checked = false;
                    document.body.classList.remove('night-mode');
                }
            }
            
            // Aggiorna gli array degli slice attivi per la modalità corrente del backend
            const isCurrentlyNightMode = response.mode === 'NIGHT';
            if (isCurrentlyNightMode) {
                selectedSlicesNight = [...response.active_slices];
                console.log("Slice attivi in modalità notte:", selectedSlicesNight);
                
                // Se siamo in modalità notte nel frontend, aggiorna i checkbox e colori
                if (!dayMode) {
                    syncCheckboxesWithState();
                    updateColors();
                }
            } else {
                selectedSlicesDay = [...response.active_slices];
                console.log("Slice attivi in modalità giorno:", selectedSlicesDay);
                
                // Se siamo in modalità giorno nel frontend, aggiorna i checkbox e colori
                if (dayMode) {
                    syncCheckboxesWithState();
                    updateColors();
                }
            }
            
            console.log("Stato slice sincronizzato con successo!");
            console.log("selectedSlicesDay:", selectedSlicesDay);
            console.log("selectedSlicesNight:", selectedSlicesNight);
            
            return true; // Restituisce true per indicare successo
        } else {
            console.warn("Nessun dato slice ricevuto dal backend");
            return false;
        }
    } catch (error) {
        console.error("Errore nel caricamento dello stato slice:", error);
        return false;
    }
}

// Funzione per sincronizzare i checkbox con lo stato degli slice
function syncCheckboxesWithState() {
    const selectedSlices = dayMode ? selectedSlicesDay : selectedSlicesNight;
    console.log(`Sincronizzazione checkbox per modalità ${dayMode ? 'Day' : 'Night'}:`, selectedSlices);
    
    sliceMap.forEach((item) => {
        const checkbox = document.getElementById(`tab${item.checkboxId}`);
        if (checkbox && item.checkboxId !== 11) { // Escludi il checkbox RESET
            // Verifica se almeno uno degli slice dell'item è attivo nella modalità corrente
            const isActive = item.slices.some(sliceItem => {
                const modeMatches = sliceItem.mode === (dayMode ? 'day' : 'night');
                const sliceIsSelected = selectedSlices.includes(sliceItem.slice);
                return modeMatches && sliceIsSelected;
            });
            
            checkbox.checked = isActive;
            console.log(`Checkbox ${item.checkboxId}: ${isActive ? 'attivo' : 'inattivo'}`);
        }
    });
}

function sincronizeCheckbox() {
    const selectedSlices = dayMode ? selectedSlicesDay : selectedSlicesNight;
    
    sliceMap.forEach((item) => {
        const checkbox = document.getElementById(`tab${item.checkboxId}`);
        if (checkbox) {
            checkbox.checked = item.slices.some(sliceItem => sliceItem.mode == (dayMode ? 'day' : 'night') && selectedSlices.includes(sliceItem.slice));
        }
    });
}

document.querySelectorAll('input[name="userType"]').forEach(function (input) {
    input.addEventListener('change', async function () {
        if (this.value == 'Night mode' && this.checked) {
            document.body.classList.add('night-mode');
            dayMode = false;
            console.log("Switching to Night Mode");
            await callApi('/mode/set', 'POST', { mode: "1" });
            
            // Ricarica lo stato degli slice dal backend dopo il cambio modalità
            await loadSliceState(true);

        } else {
            document.body.classList.remove('night-mode');
            dayMode = true;
            console.log("Switching to Day Mode");
            await callApi('/mode/set', 'POST', { mode: "0" });
            
            // Ricarica lo stato degli slice dal backend dopo il cambio modalità
            await loadSliceState(true);
        }
        
        console.log("selectedSlicesDay:", selectedSlicesDay);
        console.log("selectedSlicesNight:", selectedSlicesNight);
    });
});

// Gestione degli eventi di selezione per ogni checkbox
sliceMap.forEach((item) => {
    document.getElementById(`tab${item.checkboxId}`).addEventListener('change', function() {
        const selectedSlices = dayMode ? selectedSlicesDay : selectedSlicesNight;

        if (item.checkboxId == 11 && this.checked) {
            document.querySelectorAll('.sidebar input[type="checkbox"]:not(#tab11)').forEach(function (checkbox) {
                checkbox.checked = false;
            });

            if (dayMode) {
                selectedSlicesDay = [];
                callApi('/reset/map', 'POST', { mode: "0" });
            } else {
                selectedSlicesNight = [];
                callApi('/reset/map', 'POST', { mode: "1" });
            }

            // Resetta le connessioni e la colorazione degli elementi
            d3.selectAll(".link").attr("class", "link").style("stroke", null).style("stroke-width", null).style("stroke-opacity", null);
            document.querySelectorAll('.sidebar .menu-item, .sidebar .menu-button').forEach(function (menuItem) {
                menuItem.style.backgroundColor = '';  
            });

            console.log("RESET Mode activated");

        } else if (this.checked) {
            const sliceToAdd = item.slices.find(sliceItem => sliceItem.mode == (dayMode ? 'day' : 'night'));

            if (sliceToAdd && !selectedSlices.includes(sliceToAdd.slice)) {
                

                if (dayMode) { 
                    selectedSlicesDay.push(sliceToAdd.slice);
                    console.log("Add slice day mode", String(sliceToAdd.slice));
                    callApi('/slice/add', 'POST', { slice_id: String(sliceToAdd.slice), mode: "0" });
                } else {
                    selectedSlicesNight.push(sliceToAdd.slice);
                    console.log("Add slice night mode", String(sliceToAdd.slice));
                    callApi('/slice/add', 'POST', { slice_id: String(sliceToAdd.slice), mode: "1" });
                }
            }

            document.getElementById('tab11').checked = false;
            const resetButton = document.querySelector('#tab11 + .menu-button');
            if (resetButton) {
                resetButton.style.backgroundColor = '';
            }

        } else {
            console.log("Remove slice");
            item.slices.forEach((sliceItem) => {
                if (sliceItem.mode == (dayMode ? 'day' : 'night')) {
                    const index = selectedSlices.indexOf(sliceItem.slice);
                    if (index > -1) {
                        if(dayMode)
                            selectedSlicesDay.splice(index, 1);
                        else
                            selectedSlicesNight.splice(index, 1);
                    }

                    if (dayMode) { 
                        callApi('/slice/remove', 'POST', { slice_id: String(sliceItem.slice), mode: "0" });
                        console.log(sliceItem.slice)
                    } else {
                        callApi('/slice/remove', 'POST', { slice_id: String(sliceItem.slice), mode: "1" });
                        console.log(sliceItem.slice)
                    }
                }
            });
        }

        updateColors();

        console.log("Slice Day:", selectedSlicesDay);
        console.log("Slice Night:", selectedSlicesNight);
    });
});


function macToDecimal(mac) {
    return parseInt(mac.replace(/:/g, ''), 16);
}


// ------------------------------------------------------------------------------------------------

var CONF = {
    image: {
        width: 50,
        height: 40
    },
    force: {
        width: 850,
        height: 550,
        dist: 80,
        charge: -600
    }
};

var ws = new WebSocket("ws://" + location.host + "/v1.0/topology/ws");
ws.onmessage = function(event) {
    var data = JSON.parse(event.data);
    var result = rpc[data.method](data.params);

    var ret = {"id": data.id, "jsonrpc": "2.0", "result": result};
    this.send(JSON.stringify(ret));
}

ws.onopen = function(event) {
    console.log("WebSocket connection opened");
}

ws.onclose = function(event) {
    console.log("WebSocket connection closed");
}

ws.onerror = function(event) {
    console.error("WebSocket error:", event);
}

/**
 * Invia una richiesta per la topologia completa tramite WebSocket
 * Questa è un'alternativa alla richiesta HTTP
 */
function requestTopologyViaWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const request = {
            "id": Date.now(),
            "jsonrpc": "2.0",
            "method": "request_complete_topology",
            "params": {}
        };
        ws.send(JSON.stringify(request));
        console.log("Topology request sent via WebSocket");
        return true;
    } else {
        console.warn("WebSocket is not open, cannot send topology request");
        return false;
    }
}

function trim_zero(obj) {
    return String(obj).replace(/^0+/, "");
}

function add_zeros(input) {
    const match = input.match(/\d+$/);
    const number = match ? match[0] : "0";
    return number.padStart(16, '0');
}

function dpid_to_int(dpid) {
    return Number("0x" + dpid);
}

var elem = {
    force: d3.layout.force()
        .size([CONF.force.width, CONF.force.height])
        .charge(CONF.force.charge)
        .linkDistance(CONF.force.dist)
        .on("tick", _tick),
    svg: d3.select(".box").append("svg")
        .attr("id", "topology")
        .attr("width", CONF.force.width)
        .attr("height", CONF.force.height),
    console: d3.select("body").append("div")
        .attr("id", "console")
        .attr("width", CONF.force.width)
        .attr("height", CONF.force.height),
};
function _tick() {
    elem.link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    elem.node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    elem.port.attr("transform", function(d) {
        var p = topo.get_port_point(d);
        return "translate(" + p.x + "," + p.y + ")";
    });
}
elem.drag = elem.force.drag().on("dragstart", _dragstart);
function _dragstart(d) {}
elem.node = elem.svg.selectAll(".node");
elem.link = elem.svg.selectAll(".link");
elem.port = elem.svg.selectAll(".port");
elem.update = function () {
    this.force
        .nodes(topo.nodes)
        .links(topo.links)
        .start();

    this.link = this.link.data(topo.links);
    this.link.exit().remove();
    this.link.enter().append("line")
        .attr("class", "link");

    this.node = this.node.data(topo.nodes);
    this.node.exit().remove();
    var nodeEnter = this.node.enter().append("g")
        .attr("class", function(d) { return "node " + d.type; })
        .on("dblclick", function(d) { d3.select(this).classed("fixed", d.fixed = false); })
        .call(this.drag);
    nodeEnter.append("image")
        .attr("xlink:href", function(d) { 
            return d.type == "switch" ? "./switch.svg" : "./host.svg"; 
        })
        .attr("x", -CONF.image.width/2)
        .attr("y", -CONF.image.height/2)
        .attr("width", CONF.image.width)
        .attr("height", CONF.image.height);
    nodeEnter.append("text")
        .attr("dx", -CONF.image.width/2)
        .attr("dy", CONF.image.height-10)
        .text(function(d) { 
            return d.type == "switch" ? "dpid: " + trim_zero(d.dpid) : "host: " + (d.dpid - MAC_MASK); 
        });
    

    var ports = topo.get_ports();
    this.port.remove();
    this.port = this.svg.selectAll(".port").data(ports);
    var portEnter = this.port.enter().append("g")
        .attr("class", "port");
    portEnter.append("circle")
        .attr("r", 8);
    portEnter.append("text")
        .attr("dx", -3)
        .attr("dy", 3)
        .text(function(d) { return trim_zero(d.port_no); });
};

function is_valid_link(link) {
    return (link.src.dpid < link.dst.dpid)
}

var topo = {
    nodes: [],
    links: [],
    node_index: {}, // dpid -> index of nodes array
    initialize: function (data) {
        this.add_switch_nodes(data.switches);
        this.add_host_nodes(data.hosts);
        this.add_switch_links(data.links);
        this.add_host_links(data.hosts);
        console.log(this.nodes);
        console.log(this.links);
    },
    add_switch_nodes: function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].type = "switch";
            this.nodes.push(nodes[i]);
        }
        this.refresh_node_index();
        console.log(this.nodes);
    },
    add_host_nodes: function (hosts) {
        for (var i = 0; i < hosts.length; i++) {
            var host = hosts[i];
    
            if (!host.port || !host.port.dpid) {
                console.warn("Host " + host.mac + " has no attached switch!");
                continue;
            }
    
            var host_mac = macToDecimal(host.mac);
            var switch_dpid = host.port.dpid;
            var switch_port = host.port.port_no;
    
            var host_index = this.nodes.length;  // Assign next available index
    
            var host_node = {
                dpid: host_mac,  // Use MAC as identifier (since hosts lack DPIDs)
                index: host_index,
                type: "host",
                port: {
                    dpid: switch_dpid,
                    port_no: switch_port,
                    hw_addr: host.port.hw_addr,
                    name: host.port.name
                }
            };
    
            console.log("add host node: " + JSON.stringify(host_node));
            this.nodes.push(host_node);
            this.node_index[host_mac] = host_index;  // Store index for linking
        }
    },    
    add_switch_links: function (links) {
        for (var i = 0; i < links.length; i++) {
            if (!is_valid_link(links[i])) continue;
            console.log("add link: " + JSON.stringify(links[i]));

            var src_dpid = links[i].src.dpid;
            var dst_dpid = links[i].dst.dpid;
            var src_index = this.node_index[src_dpid];
            var dst_index = this.node_index[dst_dpid];
            var link = {
                source: src_index,
                target: dst_index,
                port: {
                    src: links[i].src,
                    dst: links[i].dst
                }
            }
            this.links.push(link);
        }
    }, 
    add_host_links: function (hosts) {
        for (var i = 0; i < hosts.length; i++) {
            var host = hosts[i];
    
            if (!host.port || !host.port.dpid) {
                console.warn("Host " + host.mac + " has no attached switch!");
                continue;
            }
    
            var host_mac = macToDecimal(host.mac);  // Host identifier (MAC)
            var switch_dpid = host.port.dpid;  // Switch DPID
            var switch_port = host.port.port_no;  // Switch port number
            var switch_hw_addr = host.port.hw_addr;  // Switch port MAC
            var switch_name = host.port.name;  // Switch interface name
    
            if (!(switch_dpid in this.node_index) || !(host_mac in this.node_index)) {
                console.warn("Host or switch missing from node_index: " + host_mac);
                continue;
            }
    
            var host_index = this.node_index[host_mac];
            var switch_index = this.node_index[switch_dpid];
    
            var link = {
                source: switch_index,
                target: host_index,
                port: {
                    src: {
                        dpid: switch_dpid,
                        port_no: switch_port,
                        hw_addr: switch_hw_addr,
                        name: switch_name
                    },
                    dst: {
                        dpid: host_mac,  // Host MAC as identifier
                        port_no: "host",  // No specific port number
                        hw_addr: host_mac,  // Host MAC address
                        name: "host-" + host_mac
                    }
                }
            };
    
            console.log("add link: " + JSON.stringify(link));
            this.links.push(link);
        }
    }
    ,       
    delete_nodes: function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            console.log("delete switch: " + JSON.stringify(nodes[i]));

            node_index = this.get_node_index(nodes[i]);
            this.nodes.splice(node_index, 1);
        }
        this.refresh_node_index();
    },
    delete_links: function (links) {
        for (var i = 0; i < links.length; i++) {
            if (!is_valid_link(links[i])) continue;
            console.log("delete link: " + JSON.stringify(links[i]));

            link_index = this.get_link_index(links[i]);
            this.links.splice(link_index, 1);
        }
    },
    get_node_index: function (node) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (node.dpid == this.nodes[i].dpid) {
                return i;
            }
        }
        return null;
    },
    get_link_index: function (link) {
        for (var i = 0; i < this.links.length; i++) {
            if (link.src.dpid == this.links[i].port.src.dpid &&
                    link.src.port_no == this.links[i].port.src.port_no &&
                    link.dst.dpid == this.links[i].port.dst.dpid &&
                    link.dst.port_no == this.links[i].port.dst.port_no) {
                return i;
            }
        }
        return null;
    },
    get_ports: function () {
        var ports = [];
        var pushed = {};
        for (var i = 0; i < this.links.length; i++) {
            function _push(p, dir) {
                key = p.dpid + ":" + p.port_no;
                if (key in pushed) {
                    return 0;
                }

                pushed[key] = true;
                p.link_idx = i;
                p.link_dir = dir;
                return ports.push(p);
            }
            if(this.links[i].port.src.port_no != "host"){
                _push(this.links[i].port.src, "source");
            }
            if(this.links[i].port.dst.port_no != "host"){
                _push(this.links[i].port.dst, "target");
            }
        }

        return ports;
    },
    get_port_point: function (d) {
        var weight = 0.88;

        var link = this.links[d.link_idx];
        var x1 = link.source.x;
        var y1 = link.source.y;
        var x2 = link.target.x;
        var y2 = link.target.y;

        if (d.link_dir == "target") weight = 1.0 - weight;

        var x = x1 * weight + x2 * (1.0 - weight);
        var y = y1 * weight + y2 * (1.0 - weight);

        return {x: x, y: y};
    },
    refresh_node_index: function(){
        this.node_index = {};
        for (var i = 0; i < this.nodes.length; i++) {
            this.node_index[this.nodes[i].dpid] = i;
        }
    },
}

var rpc = {
    event_switch_enter: function (params) {
        var switches = [];
        for(var i=0; i < params.length; i++){
            switches.push({"dpid":params[i].dpid,"ports":params[i].ports});
        }
        topo.add_switch_nodes(switches);
        elem.update();
        return "";
    },
    event_switch_leave: function (params) {
        var switches = [];
        for(var i=0; i < params.length; i++){
            switches.push({"dpid":params[i].dpid,"ports":params[i].ports});
        }
        topo.delete_nodes(switches);
        elem.update();
        return "";
    },
    event_link_add: function (links) {
        topo.add_switch_links(links);
        elem.update();
        return "";
    },
    event_link_delete: function (links) {
        topo.delete_links(links);
        elem.update();
        return "";
    },
    event_host_add: function (hosts){
        topo.add_host_nodes(hosts);
        topo.add_host_links(hosts);
        elem.update();
        return "";
    },
    event_slice_update: function (params) {
        // Gestisce aggiornamenti degli slice in tempo reale
        console.log("Slice update event:", params);
        if (params && params.active_slices) {
            const isNightMode = params.mode === 'NIGHT';
            if (isNightMode) {
                selectedSlicesNight = [...params.active_slices];
            } else {
                selectedSlicesDay = [...params.active_slices];
            }
            syncCheckboxesWithState();
            updateColors();
        }
        return "";
    },
    event_mode_change: function (params) {
        // Gestisce cambi di modalità in tempo reale
        console.log("Mode change event:", params);
        if (params && params.mode !== undefined) {
            const isNightMode = params.mode === 'NIGHT';
            dayMode = !isNightMode;
            
            const dayRadio = document.querySelector('input[value="Day mode"]');
            const nightRadio = document.querySelector('input[value="Night mode"]');
            
            if (isNightMode) {
                nightRadio.checked = true;
                dayRadio.checked = false;
                document.body.classList.add('night-mode');
            } else {
                dayRadio.checked = true;
                nightRadio.checked = false;
                document.body.classList.remove('night-mode');
            }
            
            syncCheckboxesWithState();
            updateColors();
        }
        return "";
    },
    event_topology_complete: function (params) {
        // Gestisce il caricamento della topologia completa
        console.log("Complete topology received:", params);
        if (params && params.switches && params.links && params.hosts) {
            console.log(`Processing topology: ${params.switches.length} switches, ${params.links.length} links, ${params.hosts.length} hosts`);
            
            // Reinizializza la topologia con i nuovi dati
            topo.initialize({
                switches: params.switches, 
                links: params.links, 
                hosts: params.hosts
            });
            elem.update();
            
            // Carica le configurazioni aggiuntive
            loadAdditionalConfigurations(params.switches);
            
            console.log("Topology updated successfully from complete data");
        } else {
            console.warn("Invalid topology data received:", params);
        }
        return "";
    }
}

// QoS

/**
 * Richiede al controller di inviare la topologia completa
 * Approccio semplificato che riceve i dati direttamente via HTTP
 */
async function requestCompleteTopology() {
    try {
        console.log("Requesting complete topology...");
        const response = await callApi('/topology/send', 'POST');
        
        if (response && response.switches && response.links && response.hosts) {
            console.log("Complete topology received directly via HTTP:", response);
            console.log(`Processing topology: ${response.switches.length} switches, ${response.links.length} links, ${response.hosts.length} hosts`);
            
            // Processa i dati direttamente
            topo.initialize({
                switches: response.switches, 
                links: response.links, 
                hosts: response.hosts
            });
            elem.update();
            
            // Carica le configurazioni aggiuntive
            loadAdditionalConfigurations(response.switches);
            
            // Applica i colori degli slice attivi dopo un breve delay per assicurarsi che tutto sia caricato
            setTimeout(() => {
                console.log("Applying slice colors after topology load...");
                updateColors();
            }, 500);
            
            console.log("Topology updated successfully from HTTP response");
            return response;
        } else {
            throw new Error("Invalid topology data received");
        }
    } catch (error) {
        console.error("Error requesting complete topology:", error);
        return null;
    }
}

/**
 * Richiede direttamente la topologia tramite WebSocket senza passare per HTTP
 * Invia un messaggio RPC custom al controller
 */
function requestTopologyViaWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const request = {
            "id": Date.now(),
            "jsonrpc": "2.0",
            "method": "request_complete_topology",
            "params": {}
        };
        ws.send(JSON.stringify(request));
        console.log("Topology request sent via WebSocket RPC");
        return true;
    } else {
        console.warn("WebSocket is not open, using HTTP fallback");
        return requestCompleteTopology();
    }
}

/**
 * Recarica la topologia utilizzando il metodo WebSocket RPC
 * Con fallback al metodo tradizionale se necessario
 */
async function reloadTopology() {
    try {
        console.log("Reloading topology...");
        
        // Prova prima con WebSocket diretto se disponibile
        if (ws && ws.readyState === WebSocket.OPEN) {
            const wsResult = requestTopologyViaWebSocket();
            if (wsResult) {
                console.log("Topology reload requested via WebSocket");
                return true;
            }
        }
        
        // Altrimenti usa il metodo HTTP che triggera il WebSocket
        const httpResult = await requestCompleteTopology();
        
        if (httpResult) {
            console.log("Topology reload requested via HTTP->WebSocket");
            return true;
        } else {
            // Fallback finale al metodo tradizionale
            console.log("Falling back to traditional topology loading...");
            initialize_topology_traditional();
            return true;
        }
    } catch (error) {
        console.error("Error reloading topology:", error);
        return false;
    }
}

/**
 * Caricamento tradizionale della topologia (metodo originale)
 * Mantenuto come fallback
 */
function initialize_topology_traditional() {
    console.log("Using traditional topology loading method");
    d3.json("/v1.0/topology/hosts", function(error, hosts){
        d3.json("/v1.0/topology/switches", function(error, switches) {
            d3.json("/v1.0/topology/links", function(error, links) {
                topo.initialize({switches: switches, links: links, hosts: hosts});
                elem.update();
                
                loadAdditionalConfigurations(switches);
            });
        });
    });
}

/**
 * Installs a QoS rule on the specified switch to direct matching traffic to a given queue.
 *
 * Example usage:
 * setQoS('0000000000000001', 1, 1, 'IPv4', '192.168.1.1', 'UDP', 80, 1);
 *
 * @param {string} dpid - The datapath ID of the switch (e.g., '0000000000000001').
 * @param {number} priority - The priority of the rule (higher numbers indicate higher priority).
 * @param {number} in_port - The input port number on the switch to match.
 * @param {string} dl_type - The data link type (usually 'IPv4' or '0x0800' for IPv4 traffic).
 * @param {string} nw_dst - The destination IP address to match (e.g., '192.168.1.1').
 * @param {string} nw_proto - The network protocol to match (e.g., 'TCP' or 'UDP').
 * @param {number} tp_dst - The destination transport-layer port (e.g., 80 for HTTP).
 * @param {number} queue_id - The ID of the queue to direct matching traffic to.
 *
 * @returns {Object} The response object from the QoS rule API call.
 *
 * This function creates a flow rule that matches the specified traffic characteristics and assigns
 * matching packets to a specified QoS queue on the switch.
 */

function setQoS(dpid, priority, in_port, dl_type, nw_dst, nw_proto, tp_dst, queue_id){
    // Validate input parameters
    if (!dpid || dpid === "") {
        console.error("Invalid dpid:", dpid);
        return Promise.resolve(null);
    }
    
    if (priority === null || priority === undefined || isNaN(priority)) {
        console.error("Invalid priority:", priority);
        return Promise.resolve(null);
    }
    
    if (in_port === null || in_port === undefined || isNaN(in_port)) {
        console.error("Invalid in_port:", in_port);
        return Promise.resolve(null);
    }
    
    if (queue_id === null || queue_id === undefined || isNaN(queue_id)) {
        console.error("Invalid queue_id:", queue_id);
        return Promise.resolve(null);
    }

    req = {
        "priority": parseInt(priority),
        "match": {
            "in_port": parseInt(in_port),
            "dl_type": dl_type || "IPv4", 
            "nw_dst": nw_dst || "", 
            "nw_proto": nw_proto || "", 
            "tp_dst": tp_dst ? parseInt(tp_dst) : ""
        }, 
        "actions": {
            "queue": parseInt(queue_id)
        }
    };
    
    console.log("setQoS request:", req);
    res = callApi('/qos/rules/' + dpid, 'POST', req);
    console.log(res);
    return res;
}

/**
 * Retrieves the list of QoS rules currently installed on the specified switch.
 *
 * Example usage:
 * getQoS('0000000000000001');
 *
 * @param {string} dpid - The datapath ID of the switch (e.g., '0000000000000001').
 *
 * @returns {Object} The response object containing the list of QoS rules.
 *
 * This function sends a GET request to the `/qos/rules/<dpid>` API endpoint to fetch
 * all configured QoS rules for the given switch.
 */

function getQoS(dpid){
    res = callApi('/qos/rules/' + dpid, 'GET');
    console.log(res);
    return res;
}

/**
 * Deletes a specific QoS rule or all QoS rules from the specified switch.
 *
 * Example usage:
 * deleteQoS('0000000000000001', 3);        // Deletes the QoS rule with ID 3
 * deleteQoS('0000000000000001', 'all');    // Deletes all QoS rules on the switch
 *
 * @param {string} dpid - The datapath ID of the switch (e.g., '0000000000000001').
 * @param {number|string} qos_id - The ID of the QoS rule to delete, or the string "all" to delete all rules.
 *
 * @returns {Object} The response object from the delete operation.
 *
 * This function sends a DELETE request to the `/qos/rules/<dpid>` API endpoint to remove
 * a specific QoS rule or clear all rules from the given switch.
 */

function deleteQoS(dpid, qos_id){
    req = {"qos_id": qos_id};
    res = callApi('/qos/rules/' + dpid, 'DELETE', req);
    console.log(res);
    return res;
}

/**
 * Configures QoS (Quality of Service) queues on a specific switch port.
 *
 * Example usage:
 * setQoSQueue("0000000000000001", "s1-eth1", "linux-htb", "1000000", [
 *   {"max_rate": "1000000", "min_rate": "200000"},
 *   {"min_rate": "500000"}
 * ]);
 *
 * @param {string} dpid - The datapath ID of the switch (e.g., "0000000000000001").
 * @param {string} port_name - The name of the switch port to configure (e.g., "s1-eth1").
 * @param {string} type - The QoS type (typically "linux-htb").
 * @param {string} max_rate - The maximum rate for the port in bits per second (e.g., "1000000").
 * @param {Array<Object>} queues - An array of queue objects, each defining:
 *   - `min_rate` (required): The guaranteed minimum rate for the queue.
 *   - `max_rate` (optional): The maximum allowed rate for the queue.
 *
 * @returns {Object} The response object from the QoS API call.
 *
 * This function sends a POST request to the `/qos/queue/<dpid>` API endpoint with the specified QoS configuration.
 */

function setQoSQueue(dpid, port_name, type, max_rate, queues){
    req = {
        "port_name": port_name, 
        "type": type, 
        "max_rate": max_rate, 
        "queues": queues
    };
    res = callApi('/qos/queue/' + dpid, 'POST', req);
    console.log(res);
    return res;
}

/**
 * Retrieves the QoS queue configuration for the specified switch.
 *
 * Example usage:
 * getQoSQueue('0000000000000001');
 *
 * @param {string} dpid - The datapath ID of the switch (e.g., '0000000000000001').
 *
 * @returns {Object} The response object containing the queue configuration.
 *
 * This function sends a GET request to the `/qos/queue/<dpid>` API endpoint to
 * fetch the QoS queues configured on the given switch.
 */

function getQoSQueue(dpid){
    res = callApi('/qos/queue/' + dpid, 'GET');
    console.log(res);
    return res;
}

function setOVSDBAddress(switches){
    switches.forEach(async switch_ => {
        try {
            switch_id = switch_.dpid;
            req = "tcp:127.0.0.1:6632";
            console.log(`Setting OVSDB address for switch ${switch_id}`);
            res = await callApi('/v1.0/conf/switches/' + switch_id + '/ovsdb_addr', 'PUT', req);
            console.log(`OVSDB address set for switch ${switch_id}:`, res);
        } catch (error) {
            console.error(`Failed to set OVSDB address for switch ${switch_id}:`, error);
            
            // If this fails due to QoS issues, try clearing and retrying
            if (error.toString().includes('KeyError: 35020') || error.toString().includes('500')) {
                console.log(`Detected QoS error during OVSDB setup for switch ${switch_id}, attempting recovery...`);
                try {
                    await window.clearAllQoSRules();
                    console.log(`Retrying OVSDB setup for switch ${switch_id} after QoS cleanup...`);
                    // Small delay before retry
                    await new Promise(resolve => setTimeout(resolve, 500));
                    const retryRes = await callApi('/v1.0/conf/switches/' + switch_id + '/ovsdb_addr', 'PUT', req);
                    console.log(`OVSDB address set for switch ${switch_id} on retry:`, retryRes);
                } catch (retryError) {
                    console.error(`Failed to set OVSDB address for switch ${switch_id} even after QoS cleanup:`, retryError);
                }
            }
        }
    });
}

function initialize_topology() {
    console.log("Initializing topology...");
    
    // Preemptive system cleanup before starting
    console.log("Performing preemptive system cleanup...");
    
    // Clear any existing problematic QoS rules immediately
    setTimeout(async () => {
        try {
            console.log("Starting preemptive QoS cleanup...");
            if (window.clearAllQoSRules) {
                await window.clearAllQoSRules();
                console.log("Preemptive QoS cleanup completed successfully");
            }
        } catch (cleanupError) {
            console.warn("Preemptive QoS cleanup failed, continuing with topology loading:", cleanupError);
        }
        
        // Now proceed with topology loading
        proceedWithTopologyLoad();
    }, 100);
}

function proceedWithTopologyLoad() {
    // Usa il metodo HTTP semplificato
    requestCompleteTopology().then(result => {
        if (result) {
            console.log("Topology loaded successfully via HTTP");
        } else {
            console.log("HTTP method failed, falling back to traditional method");
            initialize_topology_traditional();
        }
    }).catch(error => {
        console.error("Error in topology initialization:", error);
        console.log("Falling back to traditional method");
        initialize_topology_traditional();
    });
}

/**
 * Carica le configurazioni aggiuntive dopo che la topologia è stata caricata
 */
async function loadAdditionalConfigurations(switches = null) {
    try {
        // Configura OVSDB se abbiamo gli switch
        if (switches && Array.isArray(switches)) {
            setOVSDBAddress(switches);
            updateSwitchSelector(switches);
        } else if (topo.nodes && topo.nodes.length > 0) {
            // Estrai gli switch dalla topologia caricata
            const switchNodes = topo.nodes.filter(node => node.type === 'switch');
            if (switchNodes.length > 0) {
                setOVSDBAddress(switchNodes);
                updateSwitchSelector(switchNodes);
            }
        }
        
        // Preemptively clear any problematic QoS rules before trying to load them
        console.log("Preemptively clearing any problematic QoS rules...");
        try {
            await window.clearAllQoSRules();
            console.log("Preemptive QoS clearing completed");
        } catch (preemptiveError) {
            console.warn("Preemptive QoS clearing failed, continuing:", preemptiveError);
        }
        
        // Carica QoS rules con auto-recovery
        try {
            await loadQoSRules();
        } catch (qosError) {
            console.warn("QoS rules loading failed, continuing with slice loading:", qosError);
        }
        
        // Carica stato slice e applica i colori
        try {
            await loadSliceState();
            // Dopo aver caricato lo stato degli slice, applica i colori
            console.log("Applying colors after topology and slice state loaded...");
            updateColors();
        } catch (sliceError) {
            console.error("Failed to load slice state:", sliceError);
        }
        
        console.log("Additional configurations loaded successfully");
    } catch (error) {
        console.error("Error loading additional configurations:", error);
    }
}

/**
 * Aggiorna il selettore degli switch per QoS
 */
function updateSwitchSelector(switches) {
    const select = document.getElementById("switchSelect");
    if (select && switches && switches.length > 0) {
        // Pulisce le opzioni esistenti tranne la prima (placeholder)
        while (select.children.length > 1) {
            select.removeChild(select.lastChild);
        }
        
        // Aggiunge i nuovi switch
        switches.forEach(sw => {
            const opt = document.createElement("option");
            opt.value = sw.dpid;
            opt.innerText = "s" + trim_zero(sw.dpid);
            select.appendChild(opt);
        });
        
        console.log(`Updated switch selector with ${switches.length} switches`);
    }
}

function parseQoSResponse(response) {
    const parsedRules = [];

    // Check if response is valid and is an array
    if (!response || !Array.isArray(response)) {
        console.warn("Invalid QoS response format:", response);
        return parsedRules;
    }

    response.forEach(entry => {
        if (!entry || !entry.switch_id || !entry.command_result) {
            console.warn("Invalid QoS entry format:", entry);
            return;
        }
        
        const switchId = entry.switch_id;
        const results = entry.command_result;

        if (!Array.isArray(results)) {
            console.warn("Invalid command_result format for switch", switchId, ":", results);
            return;
        }

        results.forEach(result => {
            if (!result || !result.qos || !Array.isArray(result.qos)) {
                console.warn("Invalid QoS result format:", result);
                return;
            }
            
            const qosEntries = result.qos;

            qosEntries.forEach(rule => {
                try {
                    parsedRules.push({
                        switch_id: switchId,
                        qos_id: rule.qos_id || "",
                        priority: rule.priority || "",
                        in_port: rule.in_port || "",
                        eth_type: rule.dl_type || "",
                        nw_dst: rule.nw_dst || "",
                        ip_proto: rule.nw_proto || "",
                        tp_dst: rule.tp_dst || "",
                        queue_id: rule.qos_id || ""
                    });
                } catch (error) {
                    console.warn("Error parsing QoS rule:", rule, error);
                }
            });
        });
    });

    return parsedRules;
}


async function loadQoSRules() {
    const sw = document.getElementById("switchSelect").value;
    try {
        const response = await getQoS(sw);
        
        // Check if the response is valid before processing
        if (!response) {
            console.warn("No response received from QoS API");
            const thead = document.getElementById("qosTable").querySelector("thead");
            const tbody = document.getElementById("qosTable").querySelector("tbody");
            thead.innerHTML = ` <th colspan="7">Error loading QoS rules</th>`;
            tbody.innerHTML = "";
            return;
        }
        
        const data = parseQoSResponse(response);
        console.log(data);
        const thead = document.getElementById("qosTable").querySelector("thead");
        const tbody = document.getElementById("qosTable").querySelector("tbody");
        if(data.length == 0){
            thead.innerHTML = ` <th colspan="7">No QoS rules found</th>`;
            tbody.innerHTML = "";
            return;
        }
        thead.innerHTML = ` <th>qos_id</th>
                            <th>priority</th>
                            <th>in_port</th>
                            <th>eth_type</th>
                            <th>nw_dst</th>
                            <th>ip_proto</th>
                            <th>tp_dst</th>
                            <th>queue_id</th>`;

        tbody.innerHTML = "";

        data.forEach(rule => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${rule.qos_id}</td>
                <td>${rule.priority}</td>
                <td>${rule.in_port}</td>
                <td>${rule.eth_type}</td>
                <td>${rule.nw_dst}</td>
                <td>${rule.ip_proto}</td>
                <td>${rule.tp_dst}</td>
                <td>${rule.queue_id}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Failed to load QoS rules:", error);
        
        // Check if this is the KeyError 35020 and auto-clear problematic rules
        if (error.toString().includes('KeyError: 35020') || error.toString().includes('500')) {
            console.log("Detected QoS KeyError 35020 - automatically clearing problematic rules...");
            try {
                const clearResult = await window.clearAllQoSRules();
                if (clearResult) {
                    console.log("QoS rules cleared successfully. Retrying loadQoSRules...");
                    // Retry loading QoS rules after clearing
                    setTimeout(() => {
                        loadQoSRules();
                    }, 1000);
                    return;
                }
            } catch (clearError) {
                console.error("Failed to auto-clear QoS rules:", clearError);
            }
        }
        
        // Update the table to show error state
        const thead = document.getElementById("qosTable").querySelector("thead");
        const tbody = document.getElementById("qosTable").querySelector("tbody");
        thead.innerHTML = ` <th colspan="7">Error loading QoS rules - Check console for details</th>`;
        tbody.innerHTML = "";
    }
}

async function setQoSRule() {
    const sw = document.getElementById("switchSelect").value;

    const dl_type = document.getElementById("eth_type").value;
    const nw_proto = document.getElementById("ip_proto").value;

    const nw_dst = document.getElementById("nw_dst").value;
    const tp_dst_str = document.getElementById("tp_dst").value;
    const queue_id_str = document.getElementById("queue_id").value;
    const in_port_str = document.getElementById("in_port").value;
    const priority_str = document.getElementById("priority").value;

    // Validate required fields
    if (!sw || sw === "") {
        alert("Please select a switch");
        return;
    }
    
    if (!priority_str || priority_str === "") {
        alert("Priority is required");
        return;
    }
    
    if (!in_port_str || in_port_str === "") {
        alert("Input port is required");
        return;
    }
    
    if (!queue_id_str || queue_id_str === "") {
        alert("Queue ID is required");
        return;
    }

    // Convert to numbers
    const tp_dst = tp_dst_str ? parseInt(tp_dst_str) : null;
    const queue_id = parseInt(queue_id_str);
    const in_port = parseInt(in_port_str);
    const priority = parseInt(priority_str);

    // Validate numeric conversions
    if (isNaN(priority)) {
        alert("Priority must be a valid number");
        return;
    }
    
    if (isNaN(in_port)) {
        alert("Input port must be a valid number");
        return;
    }
    
    if (isNaN(queue_id)) {
        alert("Queue ID must be a valid number");
        return;
    }

    console.log("Setting QoS rule with:", {
        sw, priority, in_port, dl_type, nw_dst, nw_proto, tp_dst, queue_id
    });

    try {
        const res = await setQoS(sw, priority, in_port, dl_type, nw_dst, nw_proto, tp_dst, queue_id);
        console.log("setQoS result:", res);
        if (res == null) {
            throw new Error("No response from server");
        }
        alert("Rule set!");
        loadQoSRules(); 
    } catch (error) {
        alert("Failed to set rule: " + error);
        console.error(error);
    }
}


function main() {
    // Setup global error monitoring for QoS KeyError 35020
    window.addEventListener('error', function(event) {
        if (event.error && event.error.message && event.error.message.includes('KeyError: 35020')) {
            console.log("Global error handler detected KeyError 35020, triggering automatic cleanup...");
            if (window.clearAllQoSRules) {
                window.clearAllQoSRules().catch(err => 
                    console.error("Global error handler failed to clear QoS rules:", err)
                );
            }
        }
    });
    
    // Setup console error monitoring
    const originalConsoleError = console.error;
    console.error = function(...args) {
        const message = args.join(' ');
        if (message.includes('KeyError: 35020')) {
            console.log("Console error handler detected KeyError 35020, triggering automatic cleanup...");
            if (window.clearAllQoSRules) {
                setTimeout(() => {
                    window.clearAllQoSRules().catch(err => 
                        originalConsoleError("Console error handler failed to clear QoS rules:", err)
                    );
                }, 100);
            }
        }
        originalConsoleError.apply(console, args);
    };
    
    initialize_topology();
    
    // Esponi le funzioni globalmente per debugging e uso esterno
    window.requestCompleteTopology = requestCompleteTopology;
    window.reloadTopology = reloadTopology;
    window.initializeTopology = initialize_topology;
    window.requestTopologyViaWebSocket = requestTopologyViaWebSocket;
    window.initializeTopologyTraditional = initialize_topology_traditional;
    window.loadAdditionalConfigurations = loadAdditionalConfigurations;
    window.updateSwitchSelector = updateSwitchSelector;
    window.updateColors = updateColors;
    window.loadSliceState = loadSliceState;
    window.syncCheckboxesWithState = syncCheckboxesWithState;
    
    // Esponi le funzioni QoS per debugging
    window.deleteQoS = deleteQoS;
    window.getQoS = getQoS;
    window.setQoS = setQoS;
    window.loadQoSRules = loadQoSRules;
    
    // Helper function to clear all QoS rules from all switches
    window.clearAllQoSRules = async function() {
        console.log("Clearing all QoS rules from all switches...");
        
        // Get all switch DPIDs from the topology
        const switches = topo.nodes.filter(node => node.type === 'switch');
        
        if (switches.length === 0) {
            console.warn("No switches found in topology. Make sure topology is loaded first.");
            return false;
        }
        
        let successCount = 0;
        let errorCount = 0;
        
        for (const switchNode of switches) {
            try {
                console.log(`Clearing QoS rules for switch: ${switchNode.dpid}`);
                const result = await deleteQoS(switchNode.dpid, 'all');
                if (result !== null) {
                    successCount++;
                    console.log(`✓ Successfully cleared QoS rules for switch ${switchNode.dpid}`);
                } else {
                    errorCount++;
                    console.warn(`✗ Failed to clear QoS rules for switch ${switchNode.dpid}`);
                }
            } catch (error) {
                errorCount++;
                console.error(`✗ Error clearing QoS rules for switch ${switchNode.dpid}:`, error);
            }
            
            // Small delay between requests to avoid overwhelming the controller
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        console.log(`QoS clearing completed: ${successCount} successful, ${errorCount} failed`);
        
        // Reload QoS rules after clearing
        if (successCount > 0) {
            try {
                await loadQoSRules();
                console.log("QoS rules table refreshed");
            } catch (error) {
                console.error("Error reloading QoS rules after clearing:", error);
            }
        }
        
        return successCount > 0;
    };
    
    // Funzione di utilità per forzare l'aggiornamento completo
    window.forceRefreshSlices = async function() {
        console.log("=== Force Refresh Slices ===");
        try {
            const success = await loadSliceState();
            if (success) {
                syncCheckboxesWithState();
                updateColors();
                console.log("Slices refreshed successfully");
            } else {
                console.warn("Failed to load slice state");
            }
        } catch (error) {
            console.error("Error refreshing slices:", error);
        }
    };
    
    console.log("Topology functions exposed globally:");
    console.log("- window.requestCompleteTopology(): Request topology via HTTP->WebSocket RPC");
    console.log("- window.reloadTopology(): Reload topology with intelligent fallback");
    console.log("- window.initializeTopology(): Initialize topology using WebSocket RPC");
    console.log("- window.requestTopologyViaWebSocket(): Direct WebSocket RPC request");
    console.log("- window.initializeTopologyTraditional(): Traditional D3.json loading (fallback)");
    console.log("- window.loadAdditionalConfigurations(): Load QoS and slice configurations");
    console.log("- window.updateSwitchSelector(): Update switch selector dropdown");
    console.log("- window.updateColors(): Force update link colors");
    console.log("- window.forceRefreshSlices(): Force refresh slice state and colors");
    console.log("QoS functions exposed globally:");
    console.log("- window.deleteQoS(dpid, qos_id): Delete specific QoS rule or 'all'");
    console.log("- window.getQoS(dpid): Get QoS rules for switch");
    console.log("- window.setQoS(dpid, priority, in_port, dl_type, nw_dst, nw_proto, tp_dst, queue_id): Add QoS rule");
    console.log("- window.loadQoSRules(): Reload QoS rules table");
    console.log("- window.clearAllQoSRules(): Clear all QoS rules from all switches");
    console.log("Auto-recovery for KeyError 35020 is now active!");
}

main();

