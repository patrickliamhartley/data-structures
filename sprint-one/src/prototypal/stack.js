var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function (val) {
  this[this.length] = val;
  this.length++;
};

stackMethods.pop = function () {
  this.length--;
  var temp = this[this.length];
  delete this[this.length];
  return temp;
};

stackMethods.size = function () {
  this.length = this.length >= 0 ? this.length : 0;
  return this.length;
};


