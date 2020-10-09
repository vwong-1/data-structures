var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let result = false;
  let currentTree = this;

  var findTarget = function(target, node) {
    if (node.value === target) {
      return result = true;
    } else if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        findTarget(target, node.children[i]);
      }
    }
    return result;
  }

  return findTarget(target, currentTree);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild:   O(1)
 * contains:   O(n)
 */
