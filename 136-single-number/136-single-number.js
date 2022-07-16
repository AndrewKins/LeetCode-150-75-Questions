/**
 * @param {number[]} nums
 * @return {number}
 */
/*
P
    -Non empty array of nums
    -every element appears twice except one
    -find the single one
    -increment solution with linear runtime complexity (only with input size)
    and only use constant extra space
E
D
A
C
*/
var singleNumber = function(nums) {
 // let hashMap = {}
 // for(let i = 0; i < nums.length; i++){
 //     if(!hashMap[nums[i]]){
 //         hashMap[nums[i]] = 1
 //     } else
 //         hashMap[nums[i]]++
 // }
 //    for(let value in hashMap){
 //        console.log(hashMap)
 //        if(hashMap[value] !== 2){
 //            return hashMap[value]
 //        }
 //    }
    
    let obj = {}
    for(let i of nums){
        //updates map is key not found
        if(!(i in obj)) obj[i] = i
        
        //deletes key if already present
        else delete obj[i]
    }
    return Object.keys(obj)
};