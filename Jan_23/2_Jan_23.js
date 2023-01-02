// LeetCode Problem No. 32
// [Hard] "Longest Valid Parentheses"
// (https://leetcode.com/problems/longest-valid-parentheses/)

// Solution Link: https://leetcode.com/problems/longest-valid-parentheses/solutions/2070202/js-ts-dynamic-programming-solution-explained/?languageTags=javascript

// ==== Submission 1 ====
// Date: 1/2/23
// Runtime: 124ms (faster than 31.66%)
// Memory: 44.8mb (less than 38.1%)

function longestValidParentheses(s) {
	// maxLength variable is used to monitor the maximum length of the valid substring
	// every time we fall in condition a. or b.
	// by using it we don't need to find the maximum value in the resulting dp array
    let maxLength = 0;
    let dp = new Array(s.length).fill(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') { // - condition a.
            dp[i] = 2 + (dp[i - 2] || 0); // - dp[i-2] can return undefined, if so we will add zero instead
            maxLength = Math.max(maxLength, dp[i]);
        }
        if (
            s[i - 1] === ')' &&
            s[i] === ')' &&
            s[i - dp[i - 1] - 1] === '(' // - condition b.
        ) {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
}