// Instantiate a new graph
var Graph = function() {
  this.nodeStorage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeStorage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodeStorage[node]) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // this.nodeStorage.forEachNode(this.nodeStorage.removeEdge);
  for (let key in this.nodeStorage) {
    this.removeEdge(key, node);
  }

  delete this.nodeStorage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodeStorage[fromNode] && this.nodeStorage[toNode]) {
    for (let i = 0; i < this.nodeStorage[fromNode].length; i++) {
      if (this.nodeStorage[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodeStorage[fromNode] && this.nodeStorage[toNode]) {
    this.nodeStorage[fromNode].push(toNode);
    this.nodeStorage[toNode].push(fromNode);

    // Assuming integers only
    // this.nodeStorage[fromNode].push(parseInt(toNode));
    // this.nodeStorage[toNode].push(parseInt(fromNode));

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

  if (this.nodeStorage[fromNode] && this.nodeStorage[toNode]) {
    removeEdgeHelper(this.nodeStorage[fromNode], toNode);
    removeEdgeHelper(this.nodeStorage[toNode], fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodeStorage) {
    //hasOwnProperty returns false if the referenced key in 'this.nodeStorage' is inherited
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode     : O(1)
 * contains    : O(1)
 * removeNode  : O(n) for edge deletion; O(1) for node deletion
 * hasEdge     : O(n)
 * addEdge     : O(1)
 * removeEdge  : O(n)
 * forEachNode : O(n)
 *
 */
