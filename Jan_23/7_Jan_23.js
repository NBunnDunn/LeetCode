// LeetCode Problem No. 876
// [Easy] "Middle of A Linked List"
// (https://leetcode.com/problems/middle-of-the-linked-list/)

// ==== Submission 1 ====
// Date: 1/7/23
// Runtime: 56ms (faster than 96%)
// Memory: 42.2mb (less than 28%)

var middleNode = function(head) {
    let middle = head;
    let end = head; 

    while (end != null && end.next != null) {
        middle = middle.next;
        end = end.next.next;
    }

    return middle;
};