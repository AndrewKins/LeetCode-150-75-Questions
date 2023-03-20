/**
 * @param {string} s
 * @return {number}
 */
/*
P
    -Find the length of the longest substring without repeating characters.
E
    input: "yyyyyyy"
    output: 1
D
    -Arrays / Objects
A
    -Initialize a variable that will keep track of the start of the substring
    -Initialize a variable that will keep track of the end of the substring
    -Initialize a variable that will keep track of the maxLength of the string.
    -Initialize a Set to check for duplicate values.
    -while we havent reached the end of our string
        -Check our set for a duplicate value
            -If our set has a duplicate value 
                -Then we can delete starting char (started from 0 index) - 
                    -we can then start from the next element in the given string(move starting index from 0 to 1)
    -If we dont have a duplicate value
        -Add the value to our set
        -MaxLength to equal the maxLength, Current size of the string
        -increment the end of our substring
    
-Return max Length
C
*/
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let foundCharacters = new Set();
    
    while(end < s.length){
        if(foundCharacters.has(s[end])){ //check for duplicate, if found, delete
            foundCharacters.delete(s[start])
            start += 1 // moving starting index one character forward
        } else {
            foundCharacters.add(s[end])
            maxLength = Math.max(maxLength, foundCharacters.size)
            end += 1
        }
    }
    return maxLength
};