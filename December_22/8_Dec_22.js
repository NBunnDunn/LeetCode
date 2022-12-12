// LeetCode Problem No. 29
// [Medium] "Divide Two Integers"
// (https://leetcode.com/problems/divide-two-integers/)

// ==== Submission 1 ====
// Date: 12/8/22
// Runtime: ms (faster than %)
// Memory: mb (less than %)

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
    // Input : dividend (int) & divisor(int)
    // Output : integer (truncated to 0)
    // Edge cases : 
    //      - dividend || divisor is negative
    //      - dividend is 0
    // Constraints : 
    //      - output > 2^31 - 1 : output = 2^31 - 1
    //      - output < -2^31 : output = -2^31
    //      - divisor != 0
    //      - cannot use mult/division/mod operator
    if(dividend === 0) return 0;

    let timesDivided = 0;
    while(dividend >= 0){
        if (dividend >= divisor) {
            dividend -= divisor;
            timesDivided += 1; 
        } else {
            break
        }
    }
    let maxInt = Math.pow(2, 31) - 1; 
    let minInt = -(Math.pow(2, 31)); 

    if(timesDivided > maxInt) timesDivided = maxInt;
    if(timesDivided < minInt) timesDivided = minInt;
    console.log(timesDivided);
    return timesDivided;
};

divide(18, 3);
