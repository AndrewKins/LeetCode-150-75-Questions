/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let check = new Set();

    for(let ele of nums){
        if(check.has(ele)){
            return true
        }
        check.add(ele)
    }
    return false
};