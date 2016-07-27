var Queue = function() {
  var queLine = {};
  queLine.length = 0;
  queLine.index = 0;

  _.extend(queLine, queueMethods);
  return queLine;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
  this.length++;
};

queueMethods.dequeue = function() {
  var temp = this[this.index - this.length];
  delete this[this.index - this.length];
  this.length--;
  return temp;
};

queueMethods.size = function() {
  this.length = this.length >= 0 ? this.length : 0;
  return this.length;
};


