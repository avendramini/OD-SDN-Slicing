document.querySelectorAll('input[name="userType"]').forEach(function(input) {
    input.addEventListener('change', function() {
        if (this.value === 'Night mode' && this.checked) {
            document.body.classList.add('night-mode');
        } else {
            document.body.classList.remove('night-mode');
        }
    });
});

document.getElementById('tab1').addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('label[for="tab1"]').style.color = 'red';
    } else {
        document.querySelector('label[for="tab1"]').style.color = '';
    }
});

var CONF = {
    image: { width: 50, height: 40 },
    force: { width: 850, height: 500, dist: 200, charge: -600 }
};

var sliceIdMapping = {
    'link1': 'storeManagement',
    'link2': 'defaultSlice',
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
    d3.select(this).classed("fixed", d.fixed = true);
}

elem.node = elem.svg.selectAll(".node");
elem.link = elem.svg.selectAll(".link");
elem.port = elem.svg.selectAll(".port");

elem.update = function() {
    this.force
        .nodes(topo.nodes)
        .links(topo.links)
        .start();

    this.link = this.link.data(topo.links);
    this.link.exit().remove();
    this.link.enter().append("line")
        .attr("class", function(d) {
            return 'link-' + d.sliceId; // Usa la classe dinamica
        });

    this.node = this.node.data(topo.nodes);
    this.node.exit().remove();

    var nodeEnter = this.node.enter().append("g")
        .attr("class", "node")
        .on("dblclick", function(d) { d3.select(this).classed("fixed", d.fixed = false); })
        .call(this.drag);
    nodeEnter.append("image")
        .attr("xlink:href", "./router.svg")
        .attr("x", -CONF.image.width/2)
        .attr("y", -CONF.image.height/2)
        .attr("width", CONF.image.width)
        .attr("height", CONF.image.height);
    nodeEnter.append("text")
        .attr("dx", -CONF.image.width/2)
        .attr("dy", CONF.image.height-10)
        .text(function(d) { return "dpid: " + trim_zero(d.dpid); });

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

var topo = {
    nodes: [],
    links: [],
    node_index: {},

    initialize: function(data) {
        this.add_nodes(data.switches);
        this.add_links(data.links);
    },

    add_nodes: function(nodes) {
        for (var i = 0; i < nodes.length; i++) {
            this.nodes.push(nodes[i]);
        }
        this.refresh_node_index();
    },

    add_links: function(links) {
        for (var i = 0; i < links.length; i++) {
            if (!is_valid_link(links[i])) continue;

            var src_dpid = links[i].src.dpid;
            var dst_dpid = links[i].dst.dpid;
            var src_index = this.node_index[src_dpid];
            var dst_index = this.node_index[dst_dpid];

            var sliceId = sliceIdMapping[links[i].id] || 'defaultSlice';

            var link = {
                source: src_index,
                target: dst_index,
                sliceId: sliceId,
                port: {
                    src: links[i].src,
                    dst: links[i].dst
                }
            }
            link.class = 'link-' + sliceId;
            this.links.push(link);
        }
    },

    delete_nodes: function(nodes) {
        for (var i = 0; i < nodes.length; i++) {
            var node_index = this.get_node_index(nodes[i]);
            this.nodes.splice(node_index, 1);
        }
        this.refresh_node_index();
    },

    delete_links: function(links) {
        for (var i = 0; i < links.length; i++) {
            if (!is_valid_link(links[i])) continue;
            var link_index = this.get_link_index(links[i]);
            this.links.splice(link_index, 1);
        }
    },

    get_node_index: function(node) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (node.dpid == this.nodes[i].dpid) {
                return i;
            }
        }
        return null;
    },

    get_link_index: function(link) {
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

    get_ports: function() {
        var ports = [];
        var pushed = {};
        for (var i = 0; i < this.links.length; i++) {
            function _push(p, dir) {
                var key = p.dpid + ":" + p.port_no;
                if (key in pushed) {
                    return 0;
                }
                pushed[key] = true;
                p.link_idx = i;
                p.link_dir = dir;
                return ports.push(p);
            }
            _push(this.links[i].port.src, "source");
            _push(this.links[i].port.dst, "target");
        }

        return ports;
    },

    get_port_point: function(d) {
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

    refresh_node_index: function() {
        this.node_index = {};
        for (var i = 0; i < this.nodes.length; i++) {
            this.node_index[this.nodes[i].dpid] = i;
        }
    }
};

function initialize_topology() {
    d3.json("/v1.0/topology/switches", function(error, switches) {
        if (error) {
            console.error("Errore nel caricamento dei dati dei switches", error);
            return;
        }
        d3.json("/v1.0/topology/links", function(error, links) {
            if (error) {
                console.error("Errore nel caricamento dei dati dei links", error);
                return;
            }
            topo.initialize({switches: switches, links: links});
            elem.update();
        });
    });
}

function main() {
    initialize_topology();
}

main();
