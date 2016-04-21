var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.test = 'passing';
};


Stack.prototype.push = function(value) {
  this[this.size()] = value;
};

Stack.prototype.pop = function() {
  var popped = this[this.size() - 1];
  delete this[this.size() - 1];
  return popped;
};

Stack.prototype.size = function() {
  var length = 0;
  while (this[length] !== undefined) {
    length++;
  }
  return length; 
};

var newInstance = new Stack(); 


// Do:
// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Don't:
// Declare the instance explicitly
// Return the instance explicitly