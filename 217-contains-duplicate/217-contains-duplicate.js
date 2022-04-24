/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
P- Input: array of numbers
    -Return true if a number appears at least twice
    -return false if element is (not the same)distinct
    
    -List of items(cart)
    -two boxes of same ice cream in your cart
    -Return true
    If not - return false
E
    input-[1,2,3,4,4] -output[true]
    
D -Arrays

A
    -loop through the elements in the array
     
    -if the first index in the array is equal to the second index
    -return true
    -else 
        -if element does not match return false

//Optimize
    -Sort the elements in the array
    -return true if index of second element in matching
    else return false
    
C
*/
var containsDuplicate = function(nums) {
    //declare empty object
    let hashMap = {}
    for(let i = 0; i < nums.length; i++){
    if(nums[i] in hashMap){
        return true
    } else
        hashMap[nums[i]] = true
    }
        return false
};