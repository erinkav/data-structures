var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    for (var i = 1; i < someInstance.size(); i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[someInstance.size() - 1];
    return dequeued;
  };

  someInstance.size = function() {
    var length = 0;
    for (var key in storage) {
      length++;
    }
    return length;
  };
  
  return someInstance;
};