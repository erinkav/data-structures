var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = new Node(value); //
    console.log(list.tail.next); //
    //find previous value in list obj
    // change pointer to point to new tail
    //create new node for new value
  }

  list.removeHead = function() {
    //store head value in variable
    //delete head value
    //make second item new head
    //return old stored head
  };

  list.contains = function(target) {
    //traverses over the list
    //returns true if present
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
