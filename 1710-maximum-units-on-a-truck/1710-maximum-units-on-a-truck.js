/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

/*
-Create rows and columns
-For each boy
*/
var maximumUnits = function(boxTypes, truckSize) {
    const newBoxes = boxTypes.sort((a,b) => b[1] - a[1])
    let maxUnits = 0;
    for(let i = 0; i < newBoxes.length; i += 1 ){
        const currEle = newBoxes[i]
        const numOfBoxes = currEle[0]
        const numOfUnits = currEle[1]
        if(numOfBoxes < truckSize){
            maxUnits += numOfBoxes * numOfUnits
            truckSize -= numOfBoxes
        } else {
            maxUnits += truckSize * numOfUnits
            return maxUnits
        }
    }
    return maxUnits
};