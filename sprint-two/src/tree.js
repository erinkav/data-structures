var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me - potentially could be an array 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // add to children property which is an array
  //add child to whatever this is called on. Child info is "value" input
};

treeMethods.contains = function(target) {
  //recursively search tree for target value
  //return true if present
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
