// LeetCode Problem No. 17
// [Med] "Letter Combinations of a Phone Number"
// (https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

// ==== Submission 1 ====
// Date: 10/1/22
// Runtime: 93ms (faster than 54%)
// Memory: 42.3mb (less than 31%)

/**
 * @param {string} digits
 * @return {string[]}
 */

const L = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
};

var letterCombinations = function (D) {
	let len = D.length,
		ans = [];
	if (!len) return [];
	const dfs = (pos, str) => {
		if (pos === len) {
			ans.push(str);
		} else {
			let letters = L[D[pos]];
			for (let i = 0; i < letters.length; i++)
				dfs(pos + 1, str + letters[i]);
		}
	};
	dfs(0, '');
	return ans;
};

// console.log(letterCombinations(exampleInput));
