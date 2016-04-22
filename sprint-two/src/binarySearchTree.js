var BinarySearchTree = function(value) {
  this.right;
  this.left;
  this.value = value;
};

// console.log(BinarySearchTree.prototype); 
BinarySearchTree.prototype.insert = function (value) {
  //see if current node is populated
    //if not, current node = val
  //else
    //is greater than current node
      //recurse down to right
    // else to left
  // if has children, run through function again 
  // if(this) 
  // console.log(this); 
  if (!this.left && value < this.value) {
    this.left = new BinarySearchTree(value);
  } else if (!this.right && value > this.value) {
    this.right = new BinarySearchTree(value); 
  } else if (value > this.value) {
    this.right.insert(value); 
  } else {
    this.left.insert(value); 
  }

}; 

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true; 
  } else {
    if (this.value > value && this.left) {
      return this.left.contains(value); 
    } else if (this.right) {
      return this.right.contains(value); 
    }
  }
  return this.value === value; 
}; 


BinarySearchTree.prototype.depthFirstLog = function (cb) {
  //calls function on each node starting with top node
  // if left and right values exist, calls cb on those as well
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
