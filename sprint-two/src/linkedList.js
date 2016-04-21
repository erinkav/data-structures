var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head; 

    } else {
      list.tail.next = new Node(value); //
      list.tail = list.tail.next;
    }
  }; 
  
  list.removeHead = function() {
    if (list.head !== null) {
      var oldHead = list.head; 
      list.head = oldHead.next;
      delete list[oldHead]; 
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    var current = list.head;

    while (current) {
      if (current.value === target) {
        return true;
      }
    
     current = current.next;
    }
    return false; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
