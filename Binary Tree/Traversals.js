// Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

/**
Depth First Search --> 3 types 
 1) PreOder (Root Left Right)
 2) InOrder (Left Root Right)
 3) PostOrder (Left Right Root)
 **/

// PreOder Traversal -->

// --> Using Recursive Approach :

const preorderTraversalRecursive = function (root) {
  let preOrder = [];
  function preOrderTre(root, preOrder) {
    if (root == null) return;
    preOrder.push(root.val);
    preOrderTre(root.left, preOrder);
    preOrderTre(root.right, preOrder);
  }
  preOrderTre(root, preOrder);
  return preOrder;
};

// console.log(preorderTraversalRecursive(root));

// --> Using Iterative Approach :

const preOrderTraversalIterative = function (root) {
  if (!root) return []; // !root --> root == null
  let ans = [];
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let currNode = stack.pop();
    ans.push(currNode.val);
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }
  return ans;
};

// console.log(preOrderTraversalIterative(root));

//  2) Inorder traversal :

// --> Using Recursive Approach :
// --> Using Iterative Approach :

//  3) PostOrder traversal :

// --> Using Recursive Approach :
// --> Using Iterative Approach :
