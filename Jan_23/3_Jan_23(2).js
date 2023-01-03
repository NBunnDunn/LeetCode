// LeetCode Problem No. 944 
// [Easy] "Delete Columns to Make Sorted"
// (https://leetcode.com/problems/delete-columns-to-make-sorted/description/)

// ==== Submission 1 ====
// Date: 1/3/23
// Runtime: 137ms (faster than 40.19%)
// Memory: 45.8mb (less than 80.37%)

/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(A) {
    //number of deletions
    var deletions = 0;
    
    //iterate through first word in array
    for (var index = 0; index < A[0].length; index++) {
        
        //now iterate through array
        for (var i = 0; i < A.length - 1; i++) {
            
            //check if the character at the index in this word is greater than the next
            if (A[i].charAt(index) > A[i + 1].charAt(index)) {
                //increment deletions (we would need to delete this char to make it sorted)
                deletions++;
                
                //break out of current for loop
                break;
            }
            
        }
    }
    
    //result
    return deletions;
};