// LeetCode Problem No. 11
// [Med] "Integer to Roman"
// (https://leetcode.com/problems/integer-to-roman/)

// ==== Submission 1 ====
// Date: 10/16/22
// Runtime: 254ms (faster than 23%)
// Memory: 46mb (less than 98%)

/**
 * @param {number} num
 * @return {string}
 */
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = [
	'M',
	'CM',
	'D',
	'CD',
	'C',
	'XC',
	'L',
	'XL',
	'X',
	'IX',
	'V',
	'IV',
	'I',
];

var intToRoman = function (N) {
	let ans = '';
	for (let i = 0; N; i++) while (N >= val[i]) (ans += rom[i]), (N -= val[i]);
	return ans;
};

console.log(intToRoman(60));
