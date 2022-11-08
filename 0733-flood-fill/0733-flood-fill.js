/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    //if checking if the image is null or if a position already has a new color
    //if so there is nothing to do so return the image.
    if(image == null || image.length < 1 || image[sr][sc] == newColor){
        return image;
    }
    const initialImage = image[sr][sc];
    //Below create recursive function in order to fill in selected position with new color.
    //checking if its out of bounds. 
        const fill = (image, r, c, newColor, initialImage) => {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || initialImage != image[r][c]){
                return;
            }
        image[r][c] = newColor;
        fill(image,r-1,c,newColor,initialImage);
        fill(image,r+1,c,newColor,initialImage);
        fill(image,r,c-1,newColor,initialImage);
        fill(image,r,c+1,newColor,initialImage);
    }
        fill(image,sr,sc,newColor, initialImage)
    return image; 
};