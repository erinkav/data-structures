

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.adj = [];

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = true;
  this.adj[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes[node] = false;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i<this.adj[fromNode].length; i++) {
    if(this.adj[fromNode][i] === toNode) {
      return true; 
    }
  }
  return false; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.adj[fromNode].push(toNode); 
  this.adj[toNode].push(fromNode); 
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.adj[fromNode].length; i++) {
    if (this.adj[fromNode][i] === toNode) {
      this.adj[fromNode].splice(i, 1); 
    }
  }
  for (var i = 0; i < this.adj[toNode].length; i++) {
    if (this.adj[toNode][i] === fromNode) {
      this.adj[toNode].splice(i, 1); 
    }
  } 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this.nodes, cb); 
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i]) {
      cb(i);
    } 
  }    
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


