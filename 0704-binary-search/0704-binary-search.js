/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let i = 0; i < nums.length; i += 1 ){
        let temp = nums[i]
        
        for(let ele in nums){
        if(nums[ele] === target){
            return ele
        }
    }
}
    return -1
};