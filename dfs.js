
// Graph represented as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  // DFS implementation
  function dfs(graph, start) {
    let stack = [start];
    let visited = new Set();
  
    while (stack.length > 0) {
      let node = stack.pop();
  
      if (!visited.has(node)) {
        console.log(node); // Process the node (e.g., print it)
        visited.add(node);
  
        // Push all unvisited neighbors to the stack
        for (let neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
  
  // Call DFS starting from node 'A'
  dfs(graph, 'A');
  

  
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  // DFS implementation for a tree
  function dfsTree(root) {
    if (!root) return;
  
    let stack = [root];
  
    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.value); // Process the node (e.g., print it)
  
      // Push all children to the stack
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
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
  
  dfsTree(root);
  