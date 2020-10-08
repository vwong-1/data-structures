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
    list.tail = newNode;
  };

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
    var result = this.head.value;
    //set head equal to next node
    this.head = this.head.next;
    //return result
    return result;
  };

  list.contains = function(target) {
    //recurse through head
      //check if target is there
      //returns true if there
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