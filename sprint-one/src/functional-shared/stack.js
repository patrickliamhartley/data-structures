var Stack = function() {
  var stack = {};
  stack.length = 0;
  _.extend(stack, stackMethods);
  return stack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;

};

stackMethods.pop = function() {
  this.length--;
  var temp = this[this.length];
  delete this[this.length];
  return temp;
};

stackMethods.size = function() {
  this.length = this.length >= 0 ? this.length : 0; 
  return this.length;
};
