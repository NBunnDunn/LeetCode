// LeetCode Problem No. Number 237
// [Med] "Delete a Node in a Linked List"
// (https://leetcode.com/problems/delete-node-in-a-linked-list/)

// ==== Submission 1 ====
// Date: 10/19/22
// Runtime: 79ms (faster than 87%)
// Memory: 43.8mb (less than 91%)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
	let nextNode = node.next;
	node.val = nextNode.val;
	node.next = nextNode.next;
};
