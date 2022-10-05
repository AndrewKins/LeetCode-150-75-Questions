/**
 * @param {string} s
 * @return {number}
 */
/*
P
    -Converting roman numerals to values.
    -Roman numerals represented by seven different symbols.
    -2 written as II (concatenated) 
    -12 is written as XII simply X + II

    -Roman numbers- Largest to Smallest (left to right)
    -4 is written as IV. I = 1 is before the 5
E
    
D
A
    -Initialize a hashMap to contain our symbols/values
    -loop through the given input
    -check our hashmap for that input
    -if input is found, increment that value
C
*/
var romanToInt = function(s) {
    let hashMap = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
   let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (hashMap[s[i]] < hashMap[s[i+1]]) {
            result-=hashMap[s[i]]
        } 
        //otherwise, add like normal. 
        else {
            result+=hashMap[s[i]]
        }
    }
    return result
};