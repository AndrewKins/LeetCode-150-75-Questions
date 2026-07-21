/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(const [i, num] of nums.entries()){
        let complement = target - num;
        if(map.has(complement)){
           return [map.get(complement), i]
        }
        map.set(num, i)
    }
    return [];
};