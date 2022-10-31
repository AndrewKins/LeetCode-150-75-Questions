/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        for(let ele in nums){
        if(nums[ele] === target) return ele
        }
    return -1
};