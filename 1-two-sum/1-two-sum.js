/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let hashMap = {}
    for(ele in nums){
        let matchingPairs = target - nums[ele]; //9 - 2
        if(hashMap[matchingPairs]){ //hashmap contains remainder above
            return [hashMap[matchingPairs], ele] //return number and index
        } else
        hashMap[nums[ele]] = ele
    }
}