var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));


  // your code here
  //this.children = [];  // fix me
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target) === true) {
        return true;
      } else {
        this.children[i].contains(target);
      }     
    }
    return false;
  } 

  // var truthness = false;
  // if (this.value === target) {
  //   truthness = true;
  // }
  // if (this.children.length > 0) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     truthness = truthness === true ? truthness : this.children[i].contains(target);
  //   }
  // } 
  // return truthness;


  // var truth = false;
  // var search = function(node) {
  //   if (node.value === target) {
  //     truth = true;
  //   }
  //   if (node.children.length > 0) {
  //     for (var i = 0; i < node.children.length; i++) {
  //       search(node.children[i]);
  //     }
  //   }
  // };
  // search(this);
  // return truth;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
