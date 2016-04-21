var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods); 
  return newInstance; 
};

var queueMethods = {
  enqueue: function(value) {
    this[this.size()] = value; 
  },
  dequeue: function() {
    var dequeued = this[0];
    for (var i = 0; i < this.size(); i++) {
      this[i] = this[i + 1]; 
    }
    delete this[this.size()];
    return dequeued;
  },
  size: function() {
    var length = 0;
    while (this[length] !== undefined) {
      length++;
    }
    return length; 
  }
};
