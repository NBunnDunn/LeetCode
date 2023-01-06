// LeetCode Problem No. 19
// [Medium] "Remove Nth Node From End of List"
// (https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

// ==== Submission 1 ====
// Date: 10/2/22
// Runtime: 98ms (faster than 61%)
// Memory: 43.2mb (less than 35%)

var removeNthFromEnd = function (head, n) {
	let fast = head,
		slow = head;
	for (let i = 0; i < n; i++) fast = fast.next;
	if (!fast) return head.next;
	while (fast.next) (fast = fast.next), (slow = slow.next);
	slow.next = slow.next.next;
	return head;
};
