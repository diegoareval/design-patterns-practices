class ThreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new ThreeNode(value, null, null);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let isFound = false;
      while (!isFound) {
        if (value === currentNode.value) {
          isFound = true;
          return;
        }
        if (value !== currentNode.value) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.left;
            }
          }
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }
}

three = new BinarySeachTree()
three.insert(10);
three.insert(5);
three.insert(15);
three.insert(7);
three.insert(3);

console.log(three);
