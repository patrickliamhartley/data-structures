var BinarySearchTree = function(value) {

  var tree = Object.create(BinarySearchTree.methods);
  
  tree.value = value;
  tree.right = null;
  tree.left = null;

  return tree;
};

BinarySearchTree.methods = {};



BinarySearchTree.methods.insert = function (val) { 
  // var check = function (node) {
  //   if (node.value < val) {
  //     if (node.right === null) {
  //       node.right = BinarySearchTree(val);
  //     } else {
  //       check(node.right);
  //     }
  //   } else {
  //     if (node.left === null) {
  //       node.left = BinarySearchTree(val);
  //     } else {
  //       check(node.left);
  //     }
  //   }
  // };
  // check(this);
  

  if (this.value < val) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
  

  // if (val > this.value) {
  //   if (this.right !== null) {
  //     this.right.insert(val);
  //   } else {
  //     this.right = BinarySearchTree(val);
  //   }
  // } else {
  //   if (this.left !== null) {
  //     this.left.insert(val);
  //   } else {
  //     this.left = BinarySearchTree(val);
  //   }
  // }

  
};

BinarySearchTree.methods.contains = function (node) { 
};

BinarySearchTree.methods.depthFirstLog = function (node) { 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
