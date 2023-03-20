/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*https://leetcode.com/problems/3sum/discuss/
P
    -Given an integer array of numbs
    -return all the triplets
    -[nums[i], nums[j], nums[k]]
    -if i != j and i != k and nums[i] + nums[j] + nums[k] == 0
    -solution does not contain duplicate triplets
    
E
D   
A
    -initialize an empty array that will 
    -Check if there are 3 input numbers
    -
C
*/
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b); // sort the array for efficient searching
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate numbers
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicate numbers
                while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicate numbers
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};