/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//REFACTORED
//Using HashMap - Check for matching pairs
    
//Declare an empty object to that will contain the array values
//Initilize the key value pairs with a value of 1
// 
var twoSum = function(nums, target) {
    let hashMap = {}
    for(let ele in nums){
        console.log(ele)
        let matchingPair = target - nums[ele];
        if(hashMap[matchingPair]) {
            return [hashMap[matchingPair], ele];
        } else {
            hashMap[nums[ele]] = ele
        }
    }
}

//indices = index
//return indexes of 2 numbers so they add up to the target 
//given an array of integers [2,4,6,8]
//return indices of two numbers so they add up to the target []


//Loop through the array
//If the sum of the first number and the second number added together is the target number return the indexes of those numbers.
//If the first number plus the second number (sum) isnt the target total



//possible edge cases
//What if the first two numbers aren't equal to the target number?