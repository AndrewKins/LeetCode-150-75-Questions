/**
 * @param {string} s
 * @return {number}
 */

/*
P
-Find first non repeating charracter
-Return its index
-If it doesnt exist return -1
E
Input: leetcode output: 2
D
Strings, Arrays
A
-Create an empty object
-Loop through the string
-check for key value pairs, 
-if there isnt one add 1
-Else if there is add 1
-Check the object keys
-If key is equal to one return index of key

C
*/
var firstUniqChar = function(s) {
    let answer = {}
    
    for(let i = 0; i <=s.length; i++){
        if(!answer[s[i]]){
            answer[s[i]] = 1
              //If the element is not inside of the object give it a value of one
        } else
            answer[s[i]] ++
            //if the element is seen in the object, add one
    }
    for(let ele of Object.keys(answer)){
        if(answer[ele] === 1){
            //check the object keys for a value of one.
            return s.indexOf(ele)
            //if it is one, return the index.
        }
    }
        return -1
};