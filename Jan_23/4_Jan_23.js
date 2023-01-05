// LeetCode Problem No. 2244
// [Medium] "Minimum Rounds to Complete All Tasks"
// (https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/)

// ==== Submission 1 ====
// Date: 1/4/23
// Runtime: 326ms (faster than 46%)
// Memory: 56.9mb (less than 74%)

/**
 * @param {number[]} tasks
 * @return {number}
 */
 var minimumRounds = function(tasks) {
    let freq={}
    for(let i=0;i<tasks.length;i++)
    {
        if(freq[tasks[i]])
        {
            freq[tasks[i]]+=1;
        }
        else
        {
            freq[tasks[i]]=1;
        }
        
    }
    let ans=0;
    // console.log(freq);
    for(let obj in freq)
    {
        if(freq[obj]==1) return -1;
        else
        {
            ans+=Math.ceil(freq[obj]/3.0);
        }
    }
    return ans;
};

let taskArr = [66,66,63,61,63,63,64,66,66,65,66,65,61,67,68,66,62,67,61,64,66,60,69,66,65,68,63,60,67,62,68,60,66,64,60,60,60,62,66,64,63,65,60,69,63,68,68,69,68,61];
console.log(
    minimumRounds(taskArr)
)