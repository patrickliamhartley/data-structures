var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
    size++;
  };

  someInstance.pop = function() {
    var last = storage[index - 1];
    size--;
    delete storage[index - 1];
    index--;
    return last;
  };

  someInstance.size = function() {
    size = size >= 0 ? size : 0;
    return size;
  };

  return someInstance;
};
