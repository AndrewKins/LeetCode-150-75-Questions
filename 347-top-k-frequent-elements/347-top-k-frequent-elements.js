/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
P- Given an array of numbers (nums) and an integer k
    -return k (most frequent elements)
        -return the answer in the order
E
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
D
    Arrays
A
    
C
*/
var topKFrequent = function(nums, k) {
     const myMap = new Map();
    
    // Count the frequency of each number in nums
    for(const num of nums){
        if(!myMap.has(num)){
            myMap.set(num, 0);
        }
        
        const count = myMap.get(num);
        myMap.set(num, count+1);
    }
    
    // Perform a bucket sort of the numbers in myMap
    // We create an array of "buckets" (i.e. an array of arrays).
    // At each index i we store numbers which occured i times.
    let buckets = new Array(nums.length+1).fill(0).map(()=>new Array(0));
    for(const [num, count] of myMap.entries()){
        buckets[count].push(num);
    }
    
    // Flatten the array of arrays
    const answer = [];
    for(const l of buckets){
        answer.push(...l);    
    }
    
    // Slice the top-K elements and return it
    return answer.slice(answer.length-k, answer.length);
};