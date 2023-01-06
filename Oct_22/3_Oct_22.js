// LeetCode Problem No. 1
// [Easy] "Two Sum"
// (https://leetcode.com/problems/two-sum/)

// ==== Submission 1 ====
// Date: 9/06/22
// Runtime: 101ms
// Memory: 42.3MB

const twoSum = (nums, target) => {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		const another = target - nums[i];

		if (map[another] > -1) {
			return [map[another], i];
		}

		map[nums[i]] = i;
	}

	return null;
};

let nums = [6, 2, 3];
console.log(twoSum(nums, 9));
// ====================================
