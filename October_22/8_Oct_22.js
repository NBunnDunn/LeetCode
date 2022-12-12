// LeetCode Problem No. 1
// [Medium] "Generate Parens"
// (https://leetcode.com/problems/generate-parentheses/)

// ==== Submission 1====
// Date: 10/08/22
// Runtime: 99ms
// Memory: 40.1MB

const generateParenthesis = (n) => {
	const result = [];
	const generate = (curr, left, right) => {
		if (left > n || left < right) return;

		if (left === n && right === n) {
			result.push(curr);
			return;
		}

		generate(curr + '(', left + 1, right);
		generate(curr + ')', left, right + 1);
	};

	generate('', 0, 0);

	return result;
};
