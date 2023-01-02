// LeetCode Problem No. 33
// [Med] "Search in a Rotated Array"
// (https://leetcode.com/problems/search-in-rotated-sorted-array/)

// ==== Submission 1 ====
// Date: 1/1/23
// Runtime: 88ms (faster than 52.4%)
// Memory: 42.1mb (less than 52.6%)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
      
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      }
      
      // When dividing the roated array into two halves, one must be sorted.
      
      // Check if the left side is sorted
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
          // target is in the left
          right = mid - 1;
          
        } else {
          // target is in the right
          left = mid + 1;
        }
      } 
      
      // Otherwise, the right side is sorted
      else {
        if (nums[mid] <= target && target <= nums[right]) {
          // target is in the right
          left = mid + 1;
  
        } else {
          // target is in the left
          right = mid - 1;
        }
      }
      
      
    }
      
    return -1;
  };

console.log(search([1,3], 1))