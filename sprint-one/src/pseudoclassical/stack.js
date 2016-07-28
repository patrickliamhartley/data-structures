var Stack = function() {
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (val) {
  this[this.length] = val;
  this.length++;
};

Stack.prototype.pop = function () {
  this.length--;
  var temp = this[this.length];
  delete this[this.length];
  return temp;
};

Stack.prototype.size = function () {
  this.length = this.length >= 0 ? this.length : 0;
  return this.length;
};
