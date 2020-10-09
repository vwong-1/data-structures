

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this[node]) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var remove = function(edge) {
    this.removeEdge(edge, node);
  }
  this.forEachNode(this.removeEdge);
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    for (let i = 0; i < this[fromNode].length; i++) {
      if (this[fromNode][i] === toNode) {
        return true;
      }
    }
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);

    // Assuming integers only
    // this[fromNode].push(parseInt(toNode));
    // this[toNode].push(parseInt(fromNode));

  } else {
    console.log("one or both of these nodes do not exist");
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  let removeEdgeHelper = function(fromNodeArr, toNodeNumber) {
    for (let i = 0; i < fromNodeArr.length; i++) {
      if (fromNodeArr[i] === toNodeNumber) {
        fromNodeArr.splice(i, 1);
      }
    }
  }

  if (this[fromNode] && this[toNode]) {
    removeEdgeHelper(this[fromNode], toNode);
    removeEdgeHelper(this[toNode], fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this);
  for (let key in this) {
    //hasOwnProperty returns false if the referenced key in 'this' is inherited
    if (this.hasOwnProperty(key)) {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


