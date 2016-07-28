

// Instantiate a new graph
var Graph = function() {
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = { 
    value: node,
    edges: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if ( this[node] ) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if ( this[node].value === node) {
    for (var i = 0; i < this[node].edges.length; i++) {
      this.removeEdge(this[node].edges[i], node);
    }
    delete this[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].edges.indexOf(toNode) >= 0) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].edges.splice(this[fromNode].edges.indexOf(toNode), 1);
  this[toNode].edges.splice(this[toNode].edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(n^2)
 * hasEdge: O(n)
 * removeEdge: O(n)
 * forEachNode: O(n)
 */



