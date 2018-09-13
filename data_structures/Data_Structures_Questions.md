Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
O(N). Because you increase or decrease the height of the tree, for dfs, it goes from the root to the leaf.
2. What is the space complexity of your `depthFirstForEach` function?
O(N). Because the solution methods of recursive and iterative have the same O(N) runtime.
3. What is the runtime complexity of your `breadthFirstForEach` method?
O(N) because it's similar to dfs, but it's starting from the root, then continues on the left child node moving right (until reaching the last node on the right at that height), then continuing the cycle. If you add or remove a node, the runtime remains O(N).
4. What is the space complexity of your `breadthFirstForEach` method? 
O(N). Again, because adding a node increases time complexity linearly.
5. What is the runtime complexity of your `heapsort` function?
O(2*N*log(N)). Because it uses two methods shiftDown or shiftUp to sort the heap when a node is added or removed. Each of those methods use two loops which utilize O(log N) (totaling to O(2*N*log(N)))
6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
O(N). If we alter the input, it's constant time O(1)
