var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};
//set could be an object with values where keys are the strings. 
//individual sets could be arrays
var setPrototype = {};

setPrototype.add = function(item) {
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
