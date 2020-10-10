var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create Node
    var newNode = Node(value);
    //if head is null, set to first node
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
    //any added new Node will be added into next null in head
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    //any new Node values added should equal current tail
    }

  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    //if head is null, set to first node
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
    //any added new Node will be added into next null in head
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    // list.tail.previous = newNode;
    //any new Node values added should equal current tail
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return null;
    }
    //initiate result
    var result = list.head.value;
    //set head equal to next node
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    } else {
      list.tail = null;
    }
    //return result
    return result;
  };

  list.removeTail = function() {
    if (!list.tail) {
      return null;
    }
    //initiate result
    var result = list.tail.value;
    //set tail equal to previous node
    list.tail = list.tail.previous;
    if (list.tail) {
      list.tail.next = null;
    } else {
      list.head = null;
    }
    //return result
    return result;
  };

  list.contains = function(target) {
    //recurse through head
    let currentObj = list.head;
    let isFound = false;
    //check if target is there
    const containsHelper = function(target, currentObj) {

      if (currentObj.value === target) {
        return isFound = true;
      } else if (currentObj.next === null) {
        return isFound;
      } else {
        containsHelper(target, currentObj.next);
      }

      return isFound;
    };
    //returns true if there
    return containsHelper(target, list.head);
    //returns false if null
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail:   O(n)
  removeHead:  O(1)
  contains:    O(n)
 */
