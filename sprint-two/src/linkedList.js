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
      list.tail = list.tail.next;
      
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    // var search = function(node) {     
    //   if (node.value === target) {
    //     return true;
    //   }
    //   if (node.next === null) {

    //     return false;
    //   }
    //   return search(node.next);
    // };
    // return search(list.head);
    var scanned = list.head;
    var seen = false;

    while (scanned !== null) {
      
      if (scanned.value === target) {
        seen = true;
      }
      scanned = scanned.next;
      
      console.log(seen);
    }

    return seen;
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
