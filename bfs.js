// Graph represented as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  // BFS implementation
  function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();
  
    while (queue.length > 0) {
      let node = queue.shift(); // Dequeue the first node
  
      if (!visited.has(node)) {
        console.log(node); // Process the node (e.g., print it)
        visited.add(node);
  
        // Enqueue all unvisited neighbors
        for (let neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Call BFS starting from node 'A'
  bfs(graph, 'A');
  

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  // BFS implementation for a tree
  function bfsTree(root) {
    if (!root) return;
  
    let queue = [root];
  
    while (queue.length > 0) {
      let node = queue.shift(); // Dequeue the first node
      console.log(node.value); // Process the node (e.g., print it)
  
      // Enqueue all children
      for (let child of node.children) {
        queue.push(child);
      }
    }
  }
  
  // Example usage:
  let root = new TreeNode('A');
  root.children.push(new TreeNode('B'));
  root.children.push(new TreeNode('C'));
  root.children[0].children.push(new TreeNode('D'));
  root.children[0].children.push(new TreeNode('E'));
  root.children[1].children.push(new TreeNode('F'));
  
  bfsTree(root);
  