/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
P
    -Given an array of n integers
        -nums[i] is in range [1,n]
        return all the integers in the range [1,n] that do not appear in nums
E

D
    -arrays
A
    -declare an empty array to hope missing values.
    -declare an empty set
    -for each element in the array, if set does not have the element add one
    -then iterate through the set from 1
    -if the value of a key in a set is one then keep iterating else push to newArray
    -return newArray
    
C
*/
var findDisappearedNumbers = function(nums) {
    let newArray = []
    let set = new Set();
    for(let num of nums){
    if(!set.has(num)) set.add(num);
    }
    let n = 1; //lowest number to track missing elements
    while(n <= nums.length){
        if(!set.has(n)) newArray.push(n);
        n++; //continue with the rest of the element values
    }
    return newArray
};