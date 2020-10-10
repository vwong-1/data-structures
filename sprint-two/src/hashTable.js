

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let indexList = this._storage.get(index);
  // if something exists, check keys to see if already matching key
  if (this._storage.get(index)) {
  // if matching key, replace
    for (let i = 0; i < indexList.length; i++) {
      if (indexList[i][0] === k) {
        indexList[i][1] = v;
      }
    }
  // if not, link to index
  } else {
    // if nothing exists in index, set
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let indexList = this._storage.get(index);
  console.log(indexList);
  //check if something exists
  if (indexList) {
  //if something exists, loop through the index to find the key
    for (let i = 0; i < indexList.length; i++) {
      if (indexList[i][0] === k) {
        return indexList[i][1];
      }
    }
  }

  //check if something exists
  //if something exists, loop through the index to find the key

  //if index is empty, return undefined else return value
  return undefined; // Can we use braket notation to access the value?
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // how do we know the index is empty?

  //check if something exists
  //if something exists, loop through the index to remove the key

  this._storage.set(index, undefined);
};


/*
* Complexity: What is the time complexity of the above functions?
*
* insert      best case O(1) worst case O(n)
* retrieve    best case O(1) worst case O(n)
* remove      best case O(1) worst case O(n)
*
*/


