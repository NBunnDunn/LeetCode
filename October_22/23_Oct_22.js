// LeetCode Problem No. 24
// [Med] "Swap Nodes in Pairs"
// (https://leetcode.com/problems/swap-nodes-in-pairs/)

// ==== Submission 1 ====
// Date: 10/23/22
// Runtime: 97ms (faster than 49%)
// Memory: 42.1mb (less than 68%)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

var swapPairs = function (head) {
	if (head == null || head.next == null) return head;

	const next = head.next;
	head.next = swapPairs(head.next.next);
	next.next = head;

	return next;
};

linkedList1 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

swapPairs(linkedList1);
