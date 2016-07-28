var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.index = 0;
  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  this[this.index] = val;
  this.length++;
  this.index++;
};

queueMethods.dequeue = function () {
  var temp = this[this.index - this.length];
  delete this[this.index - this.length];
  this.length--;
  return temp;
};

queueMethods.size = function () {
  this.length = this.length >= 0 ? this.length : 0;
  return this.length;

};