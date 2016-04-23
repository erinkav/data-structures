var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head; 

    } else {
      list.tail.next = Node(value);
      list.tail.next.prev = list.tail;
      // console.log(list.tail.next.prev);
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
    return list.each(function () {
      if (start.value === target) {
        return true;
      }    
      return false; 
    }, list.head);
  };
  
  list.each = function(cb, start) {
    // console.log(start); 
    if (!start) {
      start = list.head; 
    }
    if (start === list.head) {
      // debugger; 
      console.log(start); 
      while (start) {
        cb(start); 
        start = start.next;
      } 
    } else if (start === list.tail) {
      while (start) {
        cb(start); 
        start = start.prev; 
      }
    } else {
      return 'Error'; 
    }
  };  

  return list; 
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null; 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
