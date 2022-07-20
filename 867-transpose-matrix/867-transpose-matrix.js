/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/*
P
    -Flip the matrix Diagonally.
E
D
A
    -Initialize a resulting variable that will contain the new array values (Diagonal matrix)
    -Loop through the rows of the array
    -Loop through the columns of the array making sure it matches that rows length
    -Let result will the flipped values. rows = columns and columns = rows
    return the resulted array
C
    
*/
const transpose = (matrix) => {
  let result = [];
    
    for(let r= 0; r<matrix[0].length; r++){
        let currentCol = []
        for(let c=0; c<matrix.length; c++){
            currentCol.push(matrix[c][r])
        }
        result.push(currentCol);
    }
    return result
};