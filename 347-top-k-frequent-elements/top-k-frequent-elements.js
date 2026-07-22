/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
      let top = new Map();
    for(let i = 0; i < nums.length; i += 1){
        let currentEle = nums[i];

        if(top.has(currentEle)){
           top.set(currentEle,top.get(currentEle) + 1);
        } else {
            top.set(currentEle,1)
        }
    }
    return Array.from(top).sort((a, b) => b[1] - a[1]).slice(0,k).map(pair => pair[0])
};