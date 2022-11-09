/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    //check for null values image
    //dfs using recursion
    //check for out of bounds
    
    //check if there are positions to check or already colored in
    if(image === null || image.length < 1 || image[sr][sc] === newColor){
        return image
    }
    
    const initialImage = image[sr][sc];
    
    const fill = (image,r,c,newColor, initalImage) => {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || initialImage !== image[r][c]){
            return;
        }
        image[r][c] = newColor;
        fill(image,r-1,c,newColor, initialImage);
        fill(image,r+1,c,newColor, initialImage);
        fill(image,r,c-1,newColor, initialImage);
        fill(image,r,c+1,newColor, initialImage);
    }
        fill(image, sr, sc, newColor, initialImage)
    return image
};