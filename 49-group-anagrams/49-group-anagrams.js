/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
P -Given an array of strings, group only the anagrams together. Return the answer in any order.
E - Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
D- Strings/ Object
A-
    initialize a map object.
        -key will be sorted value
            -value will be anagram array
    -loop through the input array(for of)
    -for each element in strs
        -split, sort and then join the elements(strings) 
    -if key exists in map, then push new string into array
    -else save key value in map. Value is an array of a single string
    
C
*/
var groupAnagrams = function(strs) {
    const map = {};
    for(const s of strs){
        const key = s.split('').sort().join('');
        if(map[key]){
            map[key].push(s)
        } else {
            map[key]=[s];
        }
    }
    return Object.values(map);
};
// time 0(n*klogk)
// space 0(nk)