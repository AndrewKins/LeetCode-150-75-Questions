/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
/*
P
    -Create 2 dimensional array using original elements and make sure it matches 
    rows m and columns n.
E
D
A
    -Declare two empty array
    -Result will hold the 2D array
    -newArray will hold the original elements that match n length
    -if original input length does that equal m*n then return an empty array
    
    Loop through the original input
    -push all original elements into newArray
    -if newArray.length = n
    -push into results
    -reset newArray
C
*/
var construct2DArray = function(original, m, n) {
   if(original.length !== (m*n)) return []
    let result = []
    let newArray = []
    for(let i = 0; i < original.length; i++){
        newArray.push(original[i])
    if(newArray.length === n){
        result.push(newArray)
        newArray = []
    }
}
    return result
};