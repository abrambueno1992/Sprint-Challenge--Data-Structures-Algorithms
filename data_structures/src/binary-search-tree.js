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
    // for (i = 0; this.value.length; i++) {
    //   visitedVertex[i] = false;

    // }
    // while (this.value !== null) {
    if (this.right === null) return 'No more values'

    // for (let i = 0; this.value.length > i; i++) {

    //   visitedVertex.push(this.value)
    //   return cb
    // }
    if (this.left) {
      // cb(this.value);
      cb(this.left.value);
      cb(this.left.right.value)
    } 
    if (this.right) {
      cb(this.right.value)
      cb(this.right.right.value)
    }
    // if (this.value) cb(this.value);
    // let visitedVertex = [];
    // console.log(this.value);//base
    // visitedVertex.push(this.value);
    // console.log(this.left.value, this.left.right.value);
    // visitedVertex.push(this.left.value)
    // visitedVertex.push(this.left.right.value)
    // //Go Counterclockwise, left, than right
    // console.log(this.right.value, this.right.right.value);
    // visitedVertex.push(this.right.value)
    // visitedVertex.push(this.right.right.value)
    // //When completed left, start going clockwise, than to the right
    //                       if (this.value) {
    //                         // cb(visitedVertex)
    //                       }
    // console.log(visitedVertex)
    // return this.contains(this.value)

    // }
  }

  breadthFirstForEach(cb) {
    let queue = [this];
    console.log(queue.length,queue)
    // for (i = 0; i< queue.length; i++) {
    //   var node = queue[i];
    //   if (node.left) {
    //     queue.push(node.left);
    //   }
    //   if (node.right) {
    //     queue.push(node.right);
  
    //   }
    //   cb (node.value);
    // }
    /* Your code here */
    // while (this.value !== null) {

    // }
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