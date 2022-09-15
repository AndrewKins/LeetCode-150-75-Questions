/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const found = new Map();
    let start = 0;
    // keeps track of the starting index of the current substring.
    let maxLength = 0;
     // keeps track of the maximum substring length.
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(found.has(s[i])) start = Math.max(found.get(s[i]) + 1, start)
        found.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLength = Math.max(i - start + 1, maxLength);
    } 
    
    return maxLength;  
};