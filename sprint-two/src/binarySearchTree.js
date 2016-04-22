var BinarySearchTree = function(value) {
  this[value] = value; 
  this.right; 
  this.value = value;
  this.children = null; 
};

BinarySearchTree.prototype.insert = function (value) {
  //see if current node is populated
    //if not, current node = val
  //else
    //is greater than current node
      //recurse down to right
    // else to left
  // if has children, run through function again 
  // if(this) 
}; 

BinarySearchTree.prototype.contains = function (value) {
  if (this === value) {
    return true; 
  } else {
    if (this < value) {
      return this.left.contains(value); 
    } else {
      return this.right.contains(value); 
    }
    return false; 

  }

  //
  // function searchIteratively (value, node) {
  //     var current_node = node; 
  //     while (current_node) {
  //       if (current_node[value]) {
  //     return current_node; 
  //   } else if (value < current_node.value) {
  //     current_node = current_node.left; 
  //   } else {
  //     return searchIteratively(value, current_node.right); 
  //   }
  // }; 

  // searchIteratively(value, this); 

}; 

BinarySearchTree.prototype.depthFirstLog = function (cb) {

}; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
