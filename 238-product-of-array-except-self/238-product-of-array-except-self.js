/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
P -return an array answer
    -answer[i] is equal to the product(*) of all elements of nums
    -not nums[i]
E
D: Arrays
A: 
    -initialize an empty array that will contain the answer;
    -
C
*/
var productExceptSelf = function(nums) {
    let answer = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i=nums.length - 1; i >= 0; i--) {
        answer[i] = rightMult;
        rightMult *= nums[i];
    }
    for (let j=0; j < nums.length; j++) {
        answer[j] *= leftMult;
        leftMult *= nums[j];
    }
    return answer;
};