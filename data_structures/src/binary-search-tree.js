class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
//     DFS(G, v)(v is the vertex where the search starts)
//     Stack S:= {}; (start with an empty stack )
//     for each vertex u, set visited[u] := false;
//     push S, v;
//     while (S is not empty) do
//       u:= pop S;
//     if (not visited[u]) then
//     visited[u] := true;
//     for each unvisited neighbour w of u
//     push S, w;
//     end if
//     end while
//  END DFS()



    /* Your code here */
   //RECURSIVE  
    // if (this.value) cb(this.value);
    // if (this.left) {
    //   this.left.depthFirstForEach(cb);
    // }
    // if (this.right) {
    //   this.right.depthFirstForEach(cb)
    // }
    //ITERATIVE
    const stack = [];
    stack.push(this);

    while(stack.length) {
      const currentNode = stack.pop();
      // left-to-right depth-first
      //right nodes need to be pushed to stack first
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      cb(currentNode.value);
    }
  }


  breadthFirstForEach(cb) {
    let queue = [this];
    
    /* Your code here */
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      cb(currentNode.value)
    }
    // return cb

  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;