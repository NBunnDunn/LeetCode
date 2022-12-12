// LeetCode Problem No. Number 16
// [Med] "3Sum Closest"
// (https://leetcode.com/problems/3sum-closest/)

// ==== Submission 1 ====
// Date: 10/19/22
// Runtime: 154ms (faster than 91%)
// Memory: 44.1mb (less than 78%)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	let closestSum = Infinity;
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let tempSum = nums[i] + nums[left] + nums[right];
			if (tempSum === target) return target;

			closestSum =
				Math.abs(target - closestSum) < Math.abs(target - tempSum)
					? closest
					: tempSum;

			if (tempSum < target) {
				left++;
				while (left < right && nums[i] === nums[i - 1]) left++;
			} else {
				right--;
				while (left < right && nums[right] === nums[right + 1]) right--;
			}
		}
	}
	return closestSum;
};

let ex = [-1, 2, 1, -4];
console.log(threeSumClosest(ex, 2));
