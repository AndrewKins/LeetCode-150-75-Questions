/**
 * @param {number[]} nums
 * @return {number}
 */
/*
P
    Return only the number in the range that is missing from the array.
E
D
A
    
C
*/
var missingNumber = function(nums) {
    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
    let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
    return sum-sum2; //difference is the answer
};