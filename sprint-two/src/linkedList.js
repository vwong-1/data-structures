var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create Node
    var newNode = new Node(value);
    //if head is null, set to first node
    if (list.head === null) {
      list.head = newNode;
    } else {
    //any added new Node will be added into next null in head
      list.addToHead(newNode, list.head);
    }
    //any new Node values added should equal current tail
    //list.tail.next = newNode;
    list.tail = newNode;
  };

  // list.tail [ {1, null}]
  // newNOde* = {2,null}
  // list.tail.next = {1, newNode}
  // newNode = {2, null}
  // list.tail = {2, null}


  //[ {1, null}] [{1, {2, null}}] [{1, {2, {3,null}}}]
  list.addToHead  = function(node, obj) {
    //helper function to addToTail
    //recurse through head and where next is null, input node
    if (obj.next === null) {
      obj.next = node;
    } else {
      list.addToHead(node, obj.next);
    }
  }

  list.removeHead = function() {
    //initiate result
    var result = list.head.value;
    //set head equal to next node
    list.head = list.head.next;
    //return result
    return result;
  };

  list.contains = function(target) {
    //recurse through head
    let currentObj = list.head;
    let isFound = false;
    //check if target is there
    var containsHelper = function(target, currentObj) {

      if (currentObj.value === target) {
        return isFound = true;
      } else if (currentObj.next === null) {
        return isFound;
      } else {
        containsHelper(target, currentObj.next);
      }

      return isFound;
    }
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



   // { head : {1, 1}  {3: {2, 2} {tail: {3, null}}}
  // { head : {1, 3}  {3, 2} {tail: {2, null}}}