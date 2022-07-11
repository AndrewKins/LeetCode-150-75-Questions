/**
 * @param {string} s
 * @return {boolean}
 */
/*
P
    -phrase is a palindrome only IF
    -convert text into all lowercase letters / non alphanumeric
    -it reads the same forwards and backwards
    -count letters and numbers
E
D
    -Arrays/objects
A
    -Use regex to get replace special characters with ""
    -declare a variable for the beginning of the string
    -declare a variable for the ending of the string
    -loop through the array
    -if the two pointers are not equal return false
    -if pointers are true ++ left point and -- right pointer
    -if all is true return true
C
*/
let isPalindrome = function(s) {
    let newS = s.replace(/[^a-z0-9]/gi,"")
    let left = 0;
    let right = newS.length - 1;
    while(left < right){
        if(newS[left].toLowerCase()!==newS[right].toLowerCase())return false;
        // if(s[leftIndex].toLowerCase()!==s[rightIndex]).toLowerCase()return false;


        left++
        right--
    }
    return true
    console.log(newS)
};