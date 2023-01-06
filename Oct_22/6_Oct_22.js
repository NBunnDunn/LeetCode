// LeetCode Problem No. Number
// [Easy] "Remove Duplicates from Sorted Array"
// (https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

// ==== Submission 1 ====
// Date: 10/6/22
// Runtime: 116ms (faster than 70%)
// Memory: 44.8mb (less than 39%)

const removeDuplicates = function (nums) {
	let l;
	let r = 1;
	while (r < nums.length && nums[r] !== nums[r - 1]) {
		r++;
	}
	l = r;
	r++;
	while (r < nums.length) {
		if (nums[r] != nums[r - 1]) {
			nums[l] = nums[r];
			l++;
		}
		r++;
	}
	return l;
};
