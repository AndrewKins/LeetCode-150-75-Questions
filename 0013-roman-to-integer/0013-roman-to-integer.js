/**
 * @param {string} s
 * @return {number}
 */
/*
P
    -Change the roman numerals into its corresponding numeric value
    -Given a string, turn into a number
E
    -XVI => 16
    -MCMXCIV =>
    -M = 1000
    -CM (C=100) (M=1000)
    (C= -100 + M = 1000) = 900
    (M = 1000 - C = 100) = 900
D
    -Objects 
A
    -Initialize a hashMap that will contain key pairs of symbols and values
    -Initialize a counter to keep track of the sum of the given integers
    -Loop through the given input
        -Initialize 2 variables 1 for the current and 1 for the next ele
            -If the Curr is less than the next ele
                -Decrement the counter by the currEle
            Else
                -Increment the counter by the current ele
            return the counter
C
*/

var romanToInt = function(s) {
    let hashMap = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let result = 0;
    for(let i = 0; i < s.length; i += 1){
        const currEle = hashMap[s[i]]
        const nextEle = hashMap[s[i + 1]]
        if (currEle < nextEle) {
            result -= currEle
        }
        else {
            result += currEle
        }
    }
    return result
};