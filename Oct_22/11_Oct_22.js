// LeetCode Problem No. 27
// [Easy] "Remove ELement"
// (https://leetcode.com/problems/remove-element/)

// ==== Submission 1 ====
// Date: 10/11/22
// Runtime: 80ms (faster than 78%)
// Memory: 42.4mb (less than 12%)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
	let removedCount = 0;
	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i];
		if (val == currentNum) {
			let removeCount = 1;
			let j = i + 1;
			while (j < nums.length && nums[j] === val) {
				removeCount++;
				j++;
			}
			nums.splice(i, removeCount);
			removedCount++;
		}
	}
	return nums.length;
};

let exArr = [1, 2, 3, 3, 3, 3, 4, 5, 6];
removeElement(exArr, 3);
