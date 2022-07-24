/**
 * @param {number} numRows
 * @return {number[][]}
 */
/*
Dynamic Programming pattern called Tabulation
    -Start with the smallest probelms and use the values from them to solve the largest problems
    
-Pascal triangle starts and ends in 1
    
To solve problem
    -What is the input given?(Is it a number, typeof)
    -What is the output?(an array of arrays)
    
P
    -Given an integers of num rows return the first numRows of pascals triangle
E
D
A
    -Declare a new array (Pascal) that the triangle will be built in
    -Loop through the input (num rows)
    -start at 1
    -Create the current row and the prev row
    -push 1 at the beginning of each current row
    -nest a loop add the valuesf rom rpev and add to the curent row
    push 1 at the end of curent row 
    push to the current row of the triangle 
    -return pascal
    -Previous ara
C
*/
let generate = function(numRows) {
    let pasCal = [[1]];
    for(let i = 1; i < numRows; i++){
        let prevRow = pasCal[i - 1];
        let currentRow = [];
        currentRow.push(1);
    for(let j = 1; j < prevRow.length; j++){
        currentRow.push(prevRow[j-1] + prevRow[j]);
    }
        currentRow.push(1);
        pasCal.push(currentRow)
    }
    return pasCal;
};