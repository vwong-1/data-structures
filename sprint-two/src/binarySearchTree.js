var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreeMethods = {};

// accepts a value and places it in the tree in the correct position.
binaryTreeMethods.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

// accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left) {
    return this.left.contains(value);
  } else if (this.value < value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

//accepts a callback and executes it on every value contained in the tree.
binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert:        O(log(n))
 * contains:      O(log(n))
 * depthFirstlog: O(n)
 *
 */
