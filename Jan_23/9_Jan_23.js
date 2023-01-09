// LeetCode Problem No. 144
// [Easy] "Binary Tree Preorder Traversal"
// (https://leetcode.com/problems/binary-tree-preorder-traversal/)

// ==== Submission 1 ====
// Date: 1/9/23
// Runtime: 56ms (faster than 96.52%)
// Memory: 42.4mb (less than 29.25%)


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(node, output = []) {
        if (node == null) {
            console.log('Null!')
            return output;
        }

        /* first print data of node */
        output.push(node.val);
 
        /* then recur on left subtree */
        preorderTraversal(node.left, output);
 
        /* now recur on right subtree */
        preorderTraversal(node.right, output);  
        
        return output;
}

// ==== Submission 2====
// Date: 1/9/23
// Runtime: 63ms (faster than 86.92%)
// Memory: 42mb (less than 75.25%)
function iterativePreorderTraversal(root) {
    if (!root) {
        return []
    }
    
    let stack = [root]
    let arr = []
        
    while (stack.length) {
        let curr = stack.pop()
        arr.push(curr.val)
        
        if (curr.right) {
            stack.push(curr.right)
        }
        
        if (curr.left) {
            stack.push(curr.left)
        }
    }
    return arr
}
            
const r = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
iterativePreorderTraversal(r);