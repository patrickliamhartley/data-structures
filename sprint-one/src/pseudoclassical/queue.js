var Queue = function() {
  this.length = 0;
  this.index = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val) {
  this[this.index] = val;
  this.length++;
  this.index++;
};

Queue.prototype.dequeue = function() { 
  var temp = this[this.index - this.length];
  delete this[this.index - this.length];
  this.length--;
  return temp;
};

Queue.prototype.size = function() {
  this.length = this.length >= 0 ? this.length : 0;
  return this.length;
};


