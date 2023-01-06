// LeetCode Problem No. 1833 
// [Medium] "Max Ice Cream Cones"
// (Link)

// ==== Submission 1 ====
// Date: 1/06/23
// Runtime: 104ms (faster than 100%)
// Memory: 55.9mb (less than 43.33%)

// Solved w/Counting Sort (Greedy) 
// Counting sort: count frequencies of each value, create a freq array
// with each index reprensenting the integer-value and the value 
// representing the frequency. 

// Pro: inherently sorts the array and allows for O(n+m) time 
// Con: use additional space for costFrequency array which is of size m

const maxIcecream = function(costs, coins) {
    const m = Math.max(...costs);
    let costFreq = Array(m + 1).fill(0);

    for (cost of costs) {
        costFreq[cost] += 1;
    }
    
    let icecreams = 0;
    for (let i = 1; i <= m; i++) {
        if (costFreq[i] === 0) continue;
        if (coins < i) break;

        let count = Math.min(costFreq[i], Math.floor( coins/ i));
        
        coins -= i * count;
        icecreams += count;
    }
    return icecreams;
}