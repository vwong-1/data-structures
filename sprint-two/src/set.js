var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = 1;
};

setPrototype.contains = function(item) {
  return (this[item]) ? true : false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add       O(1)
 * contains  O(1)
 * remove    O(1)
 *
 */
