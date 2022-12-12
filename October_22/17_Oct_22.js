// LeetCode Problem No. 9
// [Med] "Container w/Most Water"
// (https://leetcode.com/problems/container-with-most-water/)

// ==== Submission 1 ====
// Date: 10/17/22
// Runtime: 115ms (faster than 68%)
// Memory: 49mb (less than 86%)

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
	let i = 0,
		j = height.length - 1;
	let water = 0;
	while (i < j) {
		water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
		if (height[i] < height[j]) {
			i++;
		} else {
			j--;
		}
	}
	return water;
};

console.log(maxArea([1, 2, 4, 4, 2, 1, 5, 6, 8, 9]));
