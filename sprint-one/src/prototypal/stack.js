var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods); 
  return newInstance; 
};

var stackMethods = {
	pop: function() {
		var popped = this[this.size()-1]; 
		delete this[this.size()-1]; 
		return popped; 
	},
	push: function(value) {
		this[this.size()] = value; 
	}, 
	size: function() {
		var length = 0;
    while (this[length] !== undefined) {
      length++;
    }
    return length; 
	}
};


