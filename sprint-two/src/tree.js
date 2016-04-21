var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me - potentially could be an array 
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // add to children property which is an array
  this.children.push(new Tree(value));
  //add child to whatever this is called on. Child info is "value" input
};

treeMethods.contains = function(target) {
  //recursively search tree for target value
  //return true if present
  if(this.value === target) {
    return true;
  } else {
    for(var i = 0; i<this.children.length; i++) {
      return this.children[i].contains(target);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
