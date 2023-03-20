/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // Initialize two variables to hold the smallest and second smallest numbers
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    // Loop through each number in the array
    for (let num of nums) {
        // If the current number is smaller than the smallest number seen so far, update the smallest variable
        if (num <= smallest) {
            smallest = num;
        } 
        // If the current number is greater than the smallest number seen so far but smaller than the second smallest number seen so far, update the secondSmallest variable
        else if (num <= secondSmallest) {
            secondSmallest = num;
        } 
        // If the current number is greater than both the smallest and second smallest numbers seen so far, we have found our triplet
        else {
            return true;
        }
    }
    
    // If no triplet is found, return false
    return false;
};
