// LeetCode Problem No. 14
// [Easy] "Longest Common Prefix"
// (https://leetcode.com/problems/longest-common-prefix/)

// ==== Submission 1 ====
// Date: 10/19/22
// Runtime: 96ms (faster than 65%)
// Memory: 43mb (less than 58%)

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
	if (!strs || strs.length === 0) return '';
	return LCP(strs, 0, strs.length - 1);
};

const LCP = function (strs, l, r) {
	if (l == r) {
		return strs[l];
	} else {
		const mid = Math.floor((l + r) / 2);
		let left = LCP(strs, l, mid);
		let right = LCP(strs, mid + 1, r);
		return commonPrefix(left, right);
	}
};

const commonPrefix = function (leftWord, rightWord) {
	let minLength = Math.min(leftWord.length, rightWord.length);
	for (let i = 0; i < minLength; i++) {
		if (leftWord[i] != rightWord[i]) {
			return leftWord.slice(0, i);
		}
	}
	return leftWord.slice(0, minLength);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight', 'floww']));
