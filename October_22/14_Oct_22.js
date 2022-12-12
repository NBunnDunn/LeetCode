// LeetCode Problem No. 9
// [Easy] "Palindrome Number"
// (https://leetcode.com/problems/palindrome-number/)

// ==== Submission 1 ====
// Date: 10/14/22
// Runtime: 328ms (faster than 36%)
// Memory: 50.1mb (less than 94%)

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
	// Handle negatives
	if (x < 0) return false;

	let reverse = 0;
	for (let i = x; i >= 1; i = Math.floor(i / 10))
		reverse = reverse * 10 + (i % 10);
	return reverse === x;
};

console.log(isPalindrome(1));
