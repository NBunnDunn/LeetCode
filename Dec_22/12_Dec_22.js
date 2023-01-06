 // LeetCode Problem 18
 // [Difficulty] "4Sum"
 // (https://leetcode.com/problems/4sum)

 // ==== Submission 1 ====
 // Date: 12/12/22
 // Runtime: 192ms (faster than 33.8%)
 // Memory: 46.8mb (less than 32%)

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    const result = []
    
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while(low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while(nums[low] === nums[low + 1]) low++; 
                    while(nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if(sum < target) low++; // Sum is too low, increase lower bounds
                else { // Sum is too large, decrease upper bounds
                    high--; 
                }
            }   
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    // console.log(result)
    return result
};

let nums = [12,312,41,44,1,25,2,6,3,78,9,8];
fourSum(nums, 14)