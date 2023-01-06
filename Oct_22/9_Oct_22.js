// LeetCode Problem No.2
// [Med] "Add Two Numbers"
// (https://leetcode.com/problems/add-two-numbers/)

// ==== Submission 1 ====
// Date: 10/09/22
// Runtime: 160ms (faster than 66%)
// Memory: 47.1mb (less than 79%)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	// Initialize our variables
	let Answer = new ListNode(0),
		head = Answer,
		sum = 0,
		carry = 0;

	while (l1 !== null || l2 !== null || sum > 0) {
		if (l1 !== null) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2 !== null) {
			sum += l2.val;
			l2 = l2.next;
		}
		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}
		head.next = new ListNode(sum);
		head = head.next;

		sum = carry;
		carry = 0;
	}
	return Answer.next;
};

// ====================================
