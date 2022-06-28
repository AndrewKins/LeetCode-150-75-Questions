/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
P
O(1) constant - doesnt grow with the input
O(n) kinear - grows with the input size
O(n^2) quadratic - grows exponentialy with the input

E
    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [2,3]
A
    -Initialize a hashmap
    -Initialize an empty array
    -Loop through the given input
    -If not in the hashmap, add one else ++
    -For items in hashmap, if seen more that once push into empty array
    -return empty array
C
*/
var findDuplicates = function(nums) {
    let hashMap = {}
    let emptyArray = []
    for(let i = 0; i < nums.length; i++ ){
        if(hashMap[nums[i]]){
            hashMap[nums[i]]++
        }else
            hashMap[nums[i]] = 1
    }
        for(let ele in hashMap){
            if(hashMap[ele] == 2){
               let num = parseInt(ele)
                emptyArray.push(num)
            }
        }
    return emptyArray
};