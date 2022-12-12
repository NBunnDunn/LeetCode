// LeetCode Problem No. 25
// [Hard] "Reverse Nodes in K-Group"
// (https://leetcode.com/problems/reverse-nodes-in-k-group/)

// ==== Submission 1 ====
// Date: 10/22/22
// Runtime: 148ms (faster than 19%)
// Memory: 46.1mb (less than 14%)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
	let stack = [];
	let dummyNode = new ListNode(-1);
	let temp = dummyNode;

	while (head) {
		for (let i = 0; i < k && head; i++) {
			stack.push(head);
			head = head.next;
		}

		if (stack.length === k) {
			while (stack.length > 0) {
				temp.next = stack.pop();
				temp = temp.next;
			}
			temp.next = head;
		}
	}
	return dummyNode.next;
};
