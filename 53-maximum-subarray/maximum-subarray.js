/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let currentMax = 0;

    for(let i = 0; i < nums.length; i += 1){
        currentMax += nums[i];
        if(currentMax > max){
            max = currentMax
        }
        if(currentMax < 0){
            currentMax = 0;
        }
    }
    return max;
    
};