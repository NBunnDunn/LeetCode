// LeetCode Problem No. 3
// [Med] "Longest Substring without Repeating Chars"
// (https://leetcode.com/problems/longest-substring-without-repeating-characters/)

// ==== Submission 1 ====
// Date: 10/15/22
// Runtime:  150ms (faster than 59%)
// Memory:  49mb (less than 20%)

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	var temp = [];
	var maxLength = 0;

	for (var i = 0; i < s.length; i++) {
		if (temp.indexOf(s[i]) === -1) {
			temp.push(s[i]);
			if (temp.length > maxLength) maxLength = temp.length;
		} else {
			temp = temp.slice(temp.indexOf(s[i]) + 1, temp.length);
			temp.push(s[i]);
		}
	}

	return maxLength;
};
console.log(lengthOfLongestSubstring('bbbb'));
