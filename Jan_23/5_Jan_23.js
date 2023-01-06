// LeetCode Problem No. 452
// [Medium] "Minimum Number of Arrows to Burst Balloons"
// (https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

// ==== Submission 1 ====
// Date: 1/05/23
// Runtime: 422ms (faster than 50.34%)
// Memory: 75.4mb (less than 14.77%)

/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let prev = null, count = 0;
    
    for(let [start, end] of points) {
        if(prev == null || prev < start) {
            count++;
            prev = end;
        } else prev = Math.min(prev, end);
    }
    return count;
};