// LeetCode Problem No. 9
// [Easy] "Roman to Int"
// (https://leetcode.com/problems/roman-to-integer/)

// ==== Submission 1 ====
// Date: 10/18/22
// Runtime: 263ms (faster than 19%)
// Memory: 49mb (less than 26%)

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function (str) {
	let romanValues = [
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	];

	let mapDS = new Map(romanValues);
	reversedStr = Array.from(str).reverse();
	let prevNum = 0;
	let returnedNumber = 0;

	for (let char of reversedStr) {
		let currentRomanValue = mapDS.get(char);
		if (currentRomanValue >= prevNum) {
			returnedNumber += currentRomanValue;
		} else {
			returnedNumber -= currentRomanValue;
		}
		prevNum = currentRomanValue;
	}
	return returnedNumber;
};

// ==== Efficient Submission ====
// Date: 10/18/22
// Runtime: 118ms (faster than 98%)
// Memory: 46mb (less than 99%)

const romanToIntEfficient = function (s) {
	let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let ans = 0,
		cur = 0,
		prev = 0,
		j = s.length - 1;
	for (; j >= 0; j -= 1) {
		cur = hash[s[j]];
		cur < prev ? (ans -= cur) : (ans += cur);
		prev = cur;
	}
	return ans;
};
