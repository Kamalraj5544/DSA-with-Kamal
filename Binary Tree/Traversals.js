// Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

/**
 * Our Example :
 *
 *          root
 *           1
 *         /   \
 *        2     3
 *      /  \  /  \
 *     4   5 6   7
 */

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

const inorderTraversalRecursive = function (root) {
  let inOrder = [];
  function inorderTre(root, inOrder) {
    if (root == null) return;
    inorderTre(root.left, inOrder);
    inOrder.push(root.val);
    inorderTre(root.right, inOrder);
  }
  inorderTre(root, inOrder);
  return inOrder;
};
// console.log(inorderTraversalRecursive(root));

// --> Using Iterative Approach :

const inOrderTraversalIterative = function (root) {
  if (!root) return []; // !root --> root == null
  let ans = [];
  let stack = [];
  let node = root;

  while (true) {
    if (node != null) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length == 0) break;
      node = stack.pop();
      ans.push(node.val);
      node = node.right;
    }
  }
  return ans;
};

// console.log(inOrderTraversalIterative(root));

//  3) PostOrder traversal :

// --> Using Recursive Approach :

const postorderTraversalRecursive = function (root) {
  let postOrder = [];
  function postOrderTre(root, postOrder) {
    if (root == null) return;
    postOrderTre(root.left, postOrder);
    postOrderTre(root.right, postOrder);
    postOrder.push(root.val);
  }
  postOrderTre(root, postOrder);
  return postOrder;
};

// console.log(postorderTraversalRecursive(root));

// --> Using Iterative Approach : (using 2 stacks)

const postOrderTraversalIterative2 = function (root) {
  if (!root) return []; // !root --> root == null
  let ans = [];
  let stack1 = [],
    stack2 = [];
  stack1.push(root);

  while (stack1.length > 0) {
    let currNode = stack1.pop();
    stack2.push(currNode);
    if (currNode.left) stack1.push(currNode.left);
    if (currNode.right) stack1.push(currNode.right);
  }

  while (stack2.length > 0) {
    ans.push(stack2.pop().val);
  }
  return ans;
};

// console.log(postOrderTraversalIterative2(root));

// --> Using Iterative Approach : (using 1 stacks)

const postOrderTraversalIterative1 = function (root) {
  if (!root) return []; // !root --> root == null
  let ans = [];
  let stack = [];
  let node = root;

  while (stack.length > 0 || node != null) {
    if (node != null) {
      stack.push(node);
      node = node.left;
    } else {
      let temp = stack[stack.length - 1].right;
      if (temp) {
        node = temp;
      } else {
        temp = stack.pop();
        ans.push(temp.val);
        while (stack.length > 0 && temp == stack[stack.length - 1].right) {
          temp = stack.pop();
          ans.push(temp.val);
        }
      }
    }
  }
  return ans;
};

// console.log(postOrderTraversalIterative1(root));