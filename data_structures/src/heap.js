const heapsort = (arr) => {
  /* Your code here */
  // let lgt = arr.length;
  // console.log(lgt)
    // Build our max heap.
    buildMaxHeap(arr);

    // Find last element.
    lastElement = arr.length - 1;
  
    // Continue heap sorting until we have
    // just one element left in the arr.
    while(lastElement > 0) {
      swap(arr, 0, lastElement);
  
      heapify(arr, 0, lastElement);
  
      lastElement -= 1
    }
  function buildMaxHeap(arr) {
    var i;
    i = arr.length / 2 - 1;
    i = Math.floor(i);
  
    // Build a max heap out of
    // all arr elements passed in.
    while (i >= 0) {
      heapify(arr, i, arr.length);
      i -= 1;
    }
  };

function heapify(heap, i, max) {
  var index, leftChild, righChild;
  
  while(i < max) {
    index = i;

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }
      
    if (index == i) {
      return;
    }

    swap(heap,i, index);
    
    i = index;
  }
};
function swap(arr, firstItemIndex, lastItemInde) {
  var tmp = arr[firstItemIndex];
  
  // Swap first and last items in the arr.
  arr[firstItemIndex] = arr[lastItemInde];
  arr[lastItemInde] = tmp;
}
return arr
  
};


class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const max = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.siftDown(0);
    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 

    if (this.storage[index] < this.storage[maxChild]) {
      [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
      this.siftDown(maxChild);
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
