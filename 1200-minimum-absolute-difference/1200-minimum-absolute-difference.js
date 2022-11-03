/**
 * @param {number[]} arr
 * @return {number[][]}
 */

/* Each Pair must be 
    -from the input
    -a must be less than b
    - b - a to find the minimum abs difference
*/
const minimumAbsDifference = (arr) => {
    arr.sort((a,b) => a-b)
   let smallest = Infinity;
   let output = []
   
   for(let i = 0; i < arr.length - 1; i += 1){
       const absMin = arr[i+1] - arr[i]
       if(absMin < smallest){
           smallest = absMin
           output = [[arr[i], arr[i+1]]]
       } else if (absMin === smallest) {
           output.push([arr[i], arr[i+1]])
       }
   } 
    return output
};