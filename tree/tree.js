//       10
//   4        20
// 2   8   17    170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value) {
    if(!this.root) return undefined;
    let currentNode = this.root, found = false;
    while(currentNode && !found) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        found = true
      }
    }
    if(!found) return "Nothing found!"
    return currentNode
  }
}

let tree = new BinarySearchTree();