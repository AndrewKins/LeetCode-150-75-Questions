/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
     const seen = new Set() //no duplicates big hint

        for(let row = 0; row < 9; row += 1 ){
            for(let col = 0; col < 9; col += 1){
                const value = board[row][col]
                if(value === '.') continue;
                
                const rowKey = `row-${row}-${value}`;
                const colKey = `col-${col}-${value}`;
                const boxKey = `box-${Math.floor(row / 3)}-${Math.floor(col / 3)}-${value}`;

                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
              
            }
        }
        return true
};