var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.length = 0; 
  _.extend(newInstance, queueMethods); 
  return newInstance; 
};

var queueMethods = {
  enqueue: function(value) {
    this[this.length] = value; 
    this.length++;
  },
  dequeue: function() {
    var dequeued = this[0];
    for (var i = 0; i < this.length; i++) {
      this[i] = this[i + 1]; 
    }
    delete this[this.length];
    this.length--;
    return dequeued;
  },
  size: function() {
    return length > 0 ? length : 0; 
  }
};