/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prev = new Map();

    for(let i = 0; i < nums.length; i += 1){
        let current = nums[i];
        let sum = target - current;

        if(prev.has(sum)){
            return[prev.get(sum), i]
        }

        prev.set(current,i);

    }
    return [];
};