const MAC_MASK = 256;
// slice 1
var slice1DayLinkIds = [ 
    { src: "0000000000000003", dst: (6+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() }
];

// slice 2
var slice1NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() }
];

// slice 3
var slice2DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (9+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (10+MAC_MASK).toString() },
];

// slice 4
var slice3DayLinkIds = [
    { src: "0000000000000006", dst: (10+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (11+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
];

// slice 5
var slice4DayLinkIds = [
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
];


var slice4NightLinkIds = [
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
 ];
 
// slice 6
var slice5DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
];

var slice5NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000003" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000003", dst: (7+MAC_MASK).toString() },
];

// slice 7
var slice6DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
];

var slice6NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000006" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000006", dst: (12+MAC_MASK).toString() },
];

// slice 8
var slice7DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
];

var slice7NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
];

// slice 9
var slice8DayLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
];

var slice8NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (2+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (3+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
];
    

// slice 10
var slice9DayLinkIds = [
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (9+MAC_MASK).toString() },
];

// slice 11
var slice9NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000004" },
    { src: "0000000000000004", dst: "0000000000000005" },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
    { src: "0000000000000005", dst: (8+MAC_MASK).toString() },
];


// slice 12
var slice10DayLinkIds = [
    { src: "0000000000000002", dst: (4+MAC_MASK).toString() },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
];

// slice 13
var slice10NightLinkIds = [
    { src: "0000000000000001", dst: "0000000000000002" },
    { src: "0000000000000002", dst: (5+MAC_MASK).toString() },
    { src: "0000000000000001", dst: (1+MAC_MASK).toString() },
];

// RESET
var slice11DayLinkIds = [
   // { src: "0000000000000001", dst: "0000000000000003" }
];


let sliceSelezionateDay = [];
let sliceSelezionateNight = [];
let dayMode = true;

const sliceColors = {
    1: d3.rgb(0, 102, 204),     
    2: d3.rgb(255, 123, 0),     
    3: d3.rgb(255, 123, 0),     
    4: d3.rgb(10, 205, 36),     
    5: d3.rgb(10, 205, 36),      
    6: d3.rgb(10, 205, 36),     
    7: d3.rgb(10, 205, 36),    
    8: d3.rgb(10, 205, 36),      
    9: d3.rgb(255, 20, 147),  
    10: d3.rgb(0, 189, 189),    
    11: d3.rgb(233, 7, 7) 
    
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
        const response = await fetch(endpoint, {
            method: method.toUpperCase(), 
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData ? JSON.stringify(bodyData) : null
            
        });
        

        if (!response.ok) {
            throw new Error(`Errore: ${response.status} - ${await response.text()}`);
        }

        const data = await response.json();
        console.log(`Risposta da ${endpoint}:`, data);
        return data; 
    } catch (error) {
        console.error('Errore API:', error);
        return null;
    }
}

function aggiornaColorazione() {
    d3.selectAll(".link").attr("class", "link").style("stroke", null).style("stroke-width", null).style("stroke-opacity", null);

    const sliceSelezionate = dayMode ? sliceSelezionateDay : sliceSelezionateNight;
    const linkColors = {};

    sliceSelezionate.forEach(sliceCorrente => {
        var sliceLinkIds = dayMode 
            ? window[`slice${sliceCorrente}DayLinkIds`] 
            : window[`slice${sliceCorrente}NightLinkIds`];
        
        if (Array.isArray(sliceLinkIds) && sliceLinkIds.length > 0) {
            var sliceLinks = topo.links.filter(function(link) {
                return sliceLinkIds.some(function(id) {
                    console.log(link);
                    console.log(id);
                    return (link.port.src.dpid == id.src && link.port.dst.dpid == id.dst) ||
                           (link.port.src.dpid == id.dst && link.port.dst.dpid == id.src);
                });
            });

            sliceLinks.forEach(function(link) {
                const linkKey = `${link.port.src.dpid}-${link.port.dst.dpid}`;
                if (!linkColors[linkKey]) {
                    linkColors[linkKey] = [];
                }
                linkColors[linkKey].push(sliceCorrente);
            });
        }
    });

    Object.keys(linkColors).forEach(linkKey => {
        const slices = linkColors[linkKey];
        const color = calculateCombinedColor(slices);
        d3.selectAll(".link").filter(function(d) {
            return `${d.port.src.dpid}-${d.port.dst.dpid}` == linkKey ||
                   `${d.port.dst.dpid}-${d.port.src.dpid}` == linkKey;
        }).style("stroke", color).style("stroke-width", "3px").style("stroke-opacity", "1");
    });
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

function sincronizeCheckbox() {
    const sliceSelezionate = dayMode ? sliceSelezionateDay : sliceSelezionateNight;
    
    sliceMap.forEach((item) => {
        const checkbox = document.getElementById(`tab${item.checkboxId}`);
        if (checkbox) {
            checkbox.checked = item.slices.some(sliceItem => sliceItem.mode == (dayMode ? 'day' : 'night') && sliceSelezionate.includes(sliceItem.slice));
        }
    });
}

document.querySelectorAll('input[name="userType"]').forEach(function (input) {
    input.addEventListener('change', function () {
        if (this.value == 'Night mode' && this.checked) {
            document.body.classList.add('night-mode');
            dayMode = false;
            console.log("Passaggio a Night Mode");
            callApi('/mode/set', 'POST', { mode: "1" });

        } else {
            document.body.classList.remove('night-mode');
            dayMode = true;
            console.log("Passaggio a Day Mode");
            callApi('/mode/set', 'POST', { mode: "0" });  
        }
        
        // Sincronizzo i checkbox con lo stato corrente
        sincronizeCheckbox();
        
        // Aggiorno la colorazione in base alla modalità corrente
        aggiornaColorazione();
        
        console.log("sliceSelezionateDay:", sliceSelezionateDay);
        console.log("sliceSelezionateNight:", sliceSelezionateNight);
    });
});

// Gestione degli eventi di selezione per ogni checkbox
sliceMap.forEach((item) => {
    document.getElementById(`tab${item.checkboxId}`).addEventListener('change', function() {
        const sliceSelezionate = dayMode ? sliceSelezionateDay : sliceSelezionateNight;

        if (item.checkboxId == 11 && this.checked) {
            document.querySelectorAll('.sidebar input[type="checkbox"]:not(#tab11)').forEach(function (checkbox) {
                checkbox.checked = false;
            });

            if (dayMode) {
                sliceSelezionateDay = [];
                callApi('/reset/map', 'POST', { mode: "0" });
            } else {
                sliceSelezionateNight = [];
                callApi('/reset/map', 'POST', { mode: "1" });
            }

            // Resetta le connessioni e la colorazione degli elementi
            d3.selectAll(".link").attr("class", "link").style("stroke", null).style("stroke-width", null).style("stroke-opacity", null);
            document.querySelectorAll('.sidebar .menu-item').forEach(function (menuItem) {
                menuItem.style.backgroundColor = '';  
            });

            console.log("Modalità RESET attivata");

        } else if (this.checked) {
            const sliceToAdd = item.slices.find(sliceItem => sliceItem.mode == (dayMode ? 'day' : 'night'));

            if (sliceToAdd && !sliceSelezionate.includes(sliceToAdd.slice)) {
                sliceSelezionate.push(sliceToAdd.slice);

                if (dayMode) { 
                    console.log("Aggiungo slice day mode", String(sliceToAdd.slice));
                    callApi('/slice/add', 'POST', { slice_id: String(sliceToAdd.slice), mode: "0" });
                } else {
                    console.log("Aggiungo slice night mode", String(sliceToAdd.slice));
                    callApi('/slice/add', 'POST', { slice_id: String(sliceToAdd.slice), mode: "1" });
                }
            }

            document.getElementById('tab11').checked = false;
            document.querySelector('#tab11 + .menu-item').style.backgroundColor = '';

        } else {
            console.log("Rimuovo slice");
            item.slices.forEach((sliceItem) => {
                const index = sliceSelezionate.indexOf(sliceItem.slice);
                if (index > -1) {
                    sliceSelezionate.splice(index, 1);
                }

                if (dayMode) { 
                    callApi('/slice/remove', 'POST', { slice_id: String(sliceItem.slice), mode: "0" });
                    console.log(sliceItem.slice)
                } else {
                    callApi('/slice/remove', 'POST', { slice_id: String(sliceItem.slice), mode: "1" });
                    console.log(sliceItem.slice)
                }
            });
        }

        aggiornaColorazione();

        console.log("Slice Day:", sliceSelezionateDay);
        console.log("Slice Night:", sliceSelezionateNight);
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

function trim_zero(obj) {
    return String(obj).replace(/^0+/, "");
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
function _dragstart(d) {
    var dpid = dpid_to_int(d.dpid)
    /*d3.json("/stats/flow/" + dpid, function(e, data) {
         flows = data[dpid];
         console.log(flows);
        elem.console.selectAll("ul").remove();
        li = elem.console.append("ul")
            .selectAll("li");
        li.data(flows).enter().append("li")
            .text(function (d) { return JSON.stringify(d, null, " "); });
    });*/
    d3.select(this).classed("fixed", d.fixed = true);
}
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
    }
}

function initialize_topology() {
    d3.json("/v1.0/topology/hosts", function(error, hosts){
        d3.json("/v1.0/topology/switches", function(error, switches) {
            d3.json("/v1.0/topology/links", function(error, links) {
                topo.initialize({switches: switches, links: links, hosts: hosts});
                elem.update();
            });
        });
    });
}

function main() {
    initialize_topology();
}

main();

