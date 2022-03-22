class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    const newNode = new Node(val);

    // check if tree has root
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {

      if (val < current.val) {
        // if val is less than current.val but current.left doesn't exist
        if (current.left === null) {
          current.left = newNode
          return this
        }
        // curr.left does exist
        else {
          current = current.left
        }
      }

      else if (val > current.val) {

        if (current.right === null) {
          current.right = newNode
          return this
        }
        else {
          current = current.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // insertRecursively(val, current = this.root) {
  //   const newNode = new Node(val);

  //   if (this.root === null) {
  //     this.root = newNode
  //     return this
  //   }

  //   if (val < current.val) {
  //     if (current.left === null) {
  //       current.left = newNode
  //       return this
  //     } else {
  //       return this.insertRecursively(val, current.left)
  //     }
  //   }

  //   else if (val > current.val) {
  //     if (current.right === null) {
  //       current.right = newNode
  //       return this
  //     } else {
  //       return this.insertRecursively(val, current.right)
  //     }
  //   }
  // }

  insertRecursively(val, current = this.root) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      } else {
        return this.insertRecursively(val, current.left)
      }

    }
    else if (val > current.val) {
      if (current.right === null) {
        current.right = newNode;
        return this;
      } else {
        return this.insertRecursively(val, current.right)
      }
    }
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  // find(val) {
  // let currentNode = this.root;
  // let found = false;

  // if (val === currentNode.val) return currentNode;

  // while (currentNode && !found) {
  //   if (val < currentNode.val) {
  //     currentNode = currentNode.left;
  //   } else if (val > currentNode.val) {
  //     currentNode = currentNode.right;
  //   } else {
  //     found = true;
  //   }
  // }

  // if (!found) return undefined;
  // return currentNode;
  // }





  // This function should find a node in a binary tree. 
  // It should return the node if found, otherwise return undefined. 
  // This should be solved using iteration.

  find(val) {
    if (this.root === null) return undefined
    if (this.root.val === val) return this.root

    let current = this.root
    while (true) {
      if (val < current.val) {
        if (current.left === null) return undefined
        else {
          current = current.left
        }
      }

      else if (val > current.val) {
        if (current.right === null) return undefined
        else {
          current = current.right
        }
      }

      if (val === current.val) return current
      // return undefined if we don't find val in tree
      return undefined
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined
    if (this.root.val === val) return this.root

    if (val < current.val) {
      if (current.left === null) return undefined
      else {
        return this.findRecursively(val, current.left)
      }
    }

    else if (val > current.val) {
      if (current.right === null) return undefined
      else {
        return this.findRecursively(val, current.right)
      }
    }

    if (val === current.val) return current
    // return undefined if we don't find val in tree
    return undefined
  }






















  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, nodeArray = []) {
    if (this.root === null) return nodeArray;

    nodeArray.push(current.val);
    if (current.left) this.dfsPreOrder(current.left, nodeArray)
    if (current.right) this.dfsPreOrder(current.right, nodeArray)
    return nodeArray
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
 * Return an array of visited nodes. */
  dfsInOrder(current = this.root, nodeArray = []) {
    if (this.root === null) return nodeArray;

    if (current.left) this.dfsInOrder(current.left, nodeArray)
    nodeArray.push(current.val);
    if (current.right) this.dfsInOrder(current.right, nodeArray)
    return nodeArray
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
 * Return an array of visited nodes. */
  dfsPostOrder(current = this.root, nodeArray = []) {
    if (this.root === null) return nodeArray;

    if (current.left) this.dfsPostOrder(current.left, nodeArray)
    if (current.right) this.dfsPostOrder(current.right, nodeArray)
    nodeArray.push(current.val);
    return nodeArray
  }








  /** bfs(): Traverse the tree using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) return undefined;

    const nodeQueue = [this.root];
    let current = nodeQueue.shift();
    const nodeArray = [current.val];

    while (true) {
      if (current.left) nodeQueue.push(current.left)
      if (current.right) nodeQueue.push(current.right)
      if(nodeQueue.length === 0) break
      current = nodeQueue.shift();
      nodeArray.push(current.val)
    }

    return nodeArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
