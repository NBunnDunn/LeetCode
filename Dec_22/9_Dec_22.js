// LeetCode Problem 31
// [Med] "Next Permutation"
// (https://leetcode.com/problems/next-permutation/)

// ==== Submission 1 ====
// Date: 12/09/22
// Runtime: 75`ms (faster than 86%)
// Memory: 41.9mb (less than 99%)

var nextPermutation = function(nums) {
    let j = nums.length - 1, i = j - 1;
    while (nums[i + 1] <= nums[i]) i--;
    if (~i) {
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
        swap(nums, k, nums.length - k + i);
    }
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}