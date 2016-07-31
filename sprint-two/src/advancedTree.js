var advancedTree = function (val) {
  //refrence a variable to an object created from the class aTClasss
  var tree = Object.create(aTClasss);
  //add property of that object called value with the value of the input value
  tree.value = val;
  //add property 'parent' to the object
  tree.parent = null;
  //add property 'children' to the object
  tree.children = null;
  //return the decorated object
  return tree;
};

var aTClasss = {};

aTClasss.addChild = function (val) {
  //create a tree instance with the value 'val' and refrence it to a variable
  var node = advancedTree(val);
  //if the parents children property is null
  if (this.children === null ) {
    //set the parents children property to an empty array
    this.children = [];
  }
  //add the new tree as to that array
  this.children.push(node);
  //set the childs parent property to the parent
  node.parent = this;

};

aTClasss.contains = function (val) {
  //check first node's value to see if it equals the input 'val'
  if (this.value === val) {
    //return true
    return true;
  //else if the node has children
  } else if (this.children) {
    //iterate through each child
    for (var i = 0; i < this.children.length; i++) {
      //pass the contains method with argument 'val' through each child and check to see if it is true
      if (this.children[i].contains(val) === true) {
        return true;
      }
    }
  }
  return false;
};

aTClasss.removeFromParent = function () {
  //create a variable to refrence the current nodes parent
  var parent = this.parent;
  //create a variable to the current node
  var node = this;
  //set the current nodes parent to null
  this.parent = null;
  //iterate through the children of the parent node
  for (var i = 0; i < parent.children.length; i++) {
    //if child is equal to the current node
    if (parent.children[i] === node) {
      //remove the node from the array
      parent.children.splice(i, 1);
    }
  }
  //return the current node
  return node;

};