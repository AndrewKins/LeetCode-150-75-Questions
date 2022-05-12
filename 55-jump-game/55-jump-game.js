/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
P -
    Positioned at the arrays first index. (0)
    Each element represents max jump length at that positons.
    Return true if you can reacht the last index.
    False if otherwise
E
D - Array
A
    -Initialize a last index variable to be the last index
    -iterate backwards
        -if the current index + the currNum >= the last index
            reassign the last index to be i
            return last index === 0
C
*/
var canJump = function(nums) {
    let prevIndex = nums.length - 1
    for(let i = nums.length; i >= 0; i--){
        if(i + nums[i] >= prevIndex){
            prevIndex = i
        }
    }
    return prevIndex === 0
};