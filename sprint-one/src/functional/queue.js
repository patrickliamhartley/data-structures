var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index ++;
    size ++;
  };

  someInstance.dequeue = function() {
    var front = storage[index - size];
    delete storage[index - size];
    size --;
    return front;
  };

  someInstance.size = function() {
    size = size < 0 ? 0 : size;
    return size;
    
  };

  return someInstance;
};
