/**
 * @param {string} s
 * @return {boolean}
 */
/*
P
    -determine is tring is valid if it has tags and closing tags [{()}]
E
D   Strings Objects, Arrays
A
    -Declare an empty stack
        -Store the opening brackets and closing brackets
        -Check for matching pairs
        -Loop through the string
        -Check if character is a matching open character 
            -if so push it in stack
            -if closed, pop it off and check if type is the same
                -if true keep looping
                -else return false
        
C
*/
var isValid = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
for (const ele of s) {
    if (!characters[ele]){
       stack.push(ele); 
    } 
    else if (stack.pop() !== characters[ele]){
        return false;
    } 
  }
  return stack.length === 0;
};