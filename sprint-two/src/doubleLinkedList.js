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

