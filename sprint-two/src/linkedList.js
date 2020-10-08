var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  let count = 0;
  list.addToTail = function(value) {
    //initiate first value as head and tail
    //any new Node values added should equal current tail
    //increment count

  };

  list.removeHead = function() {
    //initiate result
    //set head equal to next node
    //return result
  };

  list.contains = function(target) {
    //iterating through list
      //check if target is there
      //returns true if there
    //returns false if true is not
  };

  return list;
};

var Node = function(value, count) {
  var node = {};

  node.value = value;
  node.next = null;
  // node.count = count;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



   // { head : {1, 1}  {3: {2, 2} {tail: {3, null}}}
  // { head : {1, 3}  {3, 2} {tail: {2, null}}}