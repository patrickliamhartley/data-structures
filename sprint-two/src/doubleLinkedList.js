doubleLinkedList = function() {
  
  this.head = null;
  this.tail = null;
  
};

doubleLinkedList.prototype.addToTail = function(value) {
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;

  if (this.tail === null) {
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  if (this.head === null) {
    this.head = node;
  }

};
doubleLinkedList.prototype.removeHead = function() {
  var temp = this.head;
  this.head = this.head.next;
  return temp.value;

};
doubleLinkedList.prototype.contains = function (val) {
  //doesnt work
  // var node = this.head;
  // var truthy = false;
  // if (node.value === val) {
  //   truthy = true;
  //   return truthy;
  // } else if (node.next !== null) {
  //   node = node.next;
  //   node.contains(val);
  // }
  // return truthy;

  //does work
  // var temp = this.head;
  // var truthy = false;
  // while (temp !== null) {
  //   if (temp.value === val) {
  //     truthy = true;
  //   }
  //   temp = temp.next;
  // }
  // return truthy;

  //works
  var truthy = false;
  for (var i = this.head; i !== null; i = i.next) {
    if (i.value === val) {
      truthy = true;
    }
  }
  return truthy;
};
//adToHead takes in a value
doubleLinkedList.prototype.addToHead = function(val) {
  //creates a new node with value,prev, and next properties
  var node = {};
  node.value = val;
  node.prev = null;
  node.next = null;
  //if there is no head
  if (this.head === null) {
    //head points to node
    this.head = node;
    //tail points to node
    this.tail = node;
  //if there is a defined head
  } else {
    //the previous head's prev property points to the new node
    this.head.prev = node;
    //the node's next property points to the previous head
    node.next = this.head;
    //the head points to the node
    this.head = node;
  }
};

//removeTail method declaration
doubleLinkedList.prototype.removeTail = function() {
  //indentify and store current tail's previous node and value
  var last = this.tail.prev;
  var val = this.tail.value;
  //point tail to previous node
  this.tail = last;
  //if node has a tail
  if (this.tail) { 
    //set new tail's next property to null
    this.tail.next = null;
  }
  //if head and tail point to the same node
  if (this.tail === null) {
    //set head and tail to null
    this.head = null;
  }
  //return removed node's value
  return val;
};



