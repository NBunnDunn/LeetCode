// LeetCode Problem No. 30
// [Hard] "Substring with Concatenation of All Words"
// (https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

// ==== Submission 1 ====
// Date: 1/10/23
// Runtime: 171ms (faster than 94%)
// Memory: 48.8mb (less than 78%)

var findSubstring = function(s, words) {
    let map = new Map();
    words.forEach(n => map.set(n, map.get(n) + 1 || 1));
    let size = words[0].length;
    let limit = s.length - size * words.length;
    let res = [];
    for(let i = 0; i <= limit; i++){
        if(map.get(s.substring(i, i+size))){
            let temp = new Map();
            let j = i;
            let count = 0;
            while(count<words.length){
                let str = s.substring(j, j+size);
                temp.set(str, temp.get(str) + 1 || 1);
                if(!map.get(str)||temp.get(str)>map.get(str)) break;
                j+=size;
                count++;
            }
            if(count===words.length) res.push(i);  
    }}
    return res;
};

console.log(
    findSubstring("a", ['a'])
)