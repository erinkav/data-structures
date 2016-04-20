var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods); 
  newInstance.length = 0; 
  return newInstance; 
};

var stackMethods = {
	pop: function() {
		var popped = this[this.length-1]; 
		delete this[this.length-1]; 
		this.length --;
		return popped; 
	},
	push: function(value) {
		this[this.length] = value; 
		this.length++; 
	}, 
	size: function() {
		return this.length > 0 ? this.length:0;
	}
};


