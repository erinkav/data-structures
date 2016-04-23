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

BinarySearchTree.prototype.rebalance = function () {
  //implement new structure
  //create storage
  //move values from old tree to storage
  //sort storage
  //overwrite binarysearchtree
  //populate it with values starting from median value
  var tempStorage = []; 
  this.depthFirstLog(function(node) {
    tempStorage.push(node); 
  });
  tempStorage.sort();
  var midIndex = Math.round(tempStorage.length / 2);
  var binarysearchtree = BinarySearchTree(midIndex);
  var ranOnce = false;
  var recurse = function (currentArr) {
    var midIndex = Math.round(currentArr.length / 2);
    var left = currentArr.slice(0, midIndex); 
    var right = currentArr.slice(midIndex + 1, currentArr.length); 
    if (ranOnce = true) {
      binarysearchtree.insert(midIndex); 
      return recurse(left) && recurse(right); 
    }
    ranOnce = true;
  }; 
  recurse(tempStorage); 
  console.log(this); 
  


};
/*
 * Complexity: What is the time complexity of the above functions?
 */
