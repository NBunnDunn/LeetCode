// LeetCode Problem No. 122
// [Med] "Best Time to Buy & Sell Stock Pt.2"
// (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

// ==== Submission 1 ====
// Date: 10/05/22
// Runtime: 108ms (faster than 34.5%)
// Memory: 46.5mb (less than 5%)

// Method 1 : Bottom-up + Iteration ==
var methodOne = function (prices) {
	/**
	 * Input-
	 *      prices - an array of [integer] prices ()
	 * Output-
	 *      maxProfit - an integer representing the max profit
	 * Constraints-
	 *      1.) 1 <= prices.length <= 3 * 10^4
	 *      2.) 0 <= prices[i] <= 10^4
	 *      3.) CAN buy & sell on same day
	 * Edge-case(s)-
	 */

	// It is impossible to sell stock on first day, set -infinity as initial value for curHold
	let [curHold, curNotHold] = [-Infinity, 0];

	for (const stockPrice of prices) {
		// console.log(curHold, curNotHold);
		let [prevHold, prevNotHold] = [curHold, curNotHold];

		// either keep hold, or buy in stock today at stock price
		curHold = Math.max(prevHold, prevNotHold - stockPrice);

		// either keep not-hold, or sell out stock today at stock price
		curNotHold = Math.max(prevNotHold, prevHold + stockPrice);
	}

	// Max profit must come from notHold state finally.
	return curNotHold;
};

// Driver Code
const arr = [1, 4, 7];
const methodOneAnswer = methodOne(arr);
console.log(methodOneAnswer);
