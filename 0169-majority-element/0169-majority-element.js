/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) =>{
    let hashMap = {}
    for(let n of nums ){
        if(hashMap[n]) hashMap[n] += 1
        else (hashMap[n] = 1)
        if(hashMap[n] > nums.length / 2) return n
    } 
};