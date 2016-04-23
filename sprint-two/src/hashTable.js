

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var count = 0; 
  if (!this._storage.get(index)) {
    this._storage.set(index, [tuple]);
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = tuple; 
      } else {
        bucket.push(tuple);
      }
    }
  }
  this._count++; 
  if (this._count > .75 * this._limit) {
    this.resize('double'); 
  }

};


HashTable.prototype.resize = function (operator) {
  var tempStorage = [];
  this._count = 0;
  for (var i = 0; i < this._limit; i++) {
    tempStorage.push(this._storage.get(i)); 
  }
  if (operator === 'double') {
    this._limit *= 2; 
  } else if (operator === 'half') {
    this._limit *= .5;
  }
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < tempStorage.length; i++) {
    if (tempStorage[i]) {
      for (var j = 0; j < tempStorage[i].length; j++) {
        if (tempStorage[i][j]) {    
          this.insert(tempStorage[i][j][0], tempStorage[i][j][1]);
        }
      }
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      delete bucket[i];

    }
  }
  this._count--; 
  if (this._count < .25 * this._limit) {
    this.resize('half'); 
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


