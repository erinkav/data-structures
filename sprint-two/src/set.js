var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};
//set could be an object with values where keys are the strings. 
//individual sets could be arrays
var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true; 
};

setPrototype.contains = function(item) {
  return this._storage[item]; 
};

setPrototype.remove = function(item) {
  // var removed = this._storage[item];
  this._storage[item] = false; 
  // return removed; 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
