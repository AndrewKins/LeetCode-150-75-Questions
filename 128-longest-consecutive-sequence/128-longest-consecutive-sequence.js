/**
 * @param {number[]} nums
 * @return {number}
 */
/*
P
E
D
A
C
*/
var longestConsecutive = function(nums) {
    let set = new Set();
    let c = 0, max = 0;
    for (let num of nums) {
        set.add(num);
    }

    for (let num of nums) {
        if (!set.has(num-1)){
            let temp = num;
            while (set.has(temp++)) {
                c++;
                max = Math.max(max, c);
            }
            c = 0;
        }
    }
    return max;
};