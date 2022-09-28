/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
P
    -Given an array of integers
    -Starting at the first index, grabbing the value of that element
    -Seeing if you can jump to the max length of the array
E
    input: [2,1,4,7,3]
    output: [false]
    input:[1,1,1,2]
    output:true
D
    -Arrays
A
    -Initialize a variable that will keep track of the maximum steps you can take.
    -Loop through the given input
    -If the current index is greater than the maxJump return false
    -Reassign maxjump to the current current largest jump 
    -maxJump or the currentindex + the element value
    -return true
C
*/
var canJump = function(nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (i > maxJump) return false;
    maxJump = Math.max(maxJump, i + nums[i]);
  }
  return true;
};