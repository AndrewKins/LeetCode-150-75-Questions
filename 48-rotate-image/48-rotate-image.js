/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let r = 0; r < matrix.length; r++){ //loop through the rows (top to bottom)
                                            //columns are left to right
        for(let c = r; c < matrix[0].length; c++){
            [matrix [r][c], matrix[c][r]] = [matrix [c][r], matrix[r][c]]        
        }
    }
    for(let row of matrix){
        row.reverse()
    }
};