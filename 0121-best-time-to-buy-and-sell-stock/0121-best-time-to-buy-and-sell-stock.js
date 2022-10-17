/**
 * @param {number[]} prices
 * @return {number}
 */
/*
P
    -Array of prices
    -each element is the price of a given stock on index day
    -Choose a single day to buy one stock
    -Choose a different day in future to sell that stock
    -Return max profit 
    -else return 0
E
    -Input: [7,1,5,3,6,4]
    -Output: 5
    -
D
    -Arrays
A
    Initialize a variable that will contain the max
    Initialize a variable for the left pointer
    Initialize a variable for the right pointer
    Loop through the given array
    
C
*/


const maxProfit = (prices) => {
    let max = 0; //starting profit [nothing bought nor sold yet
    let leftPointer = 0;
    let rightPointer = 1;

    while(rightPointer < prices.length) {
        const profit = (prices[rightPointer] - prices[leftPointer])

        if(profit > max){ //max is zero
        max = profit //once profit has been made, greater than max, we will update max to the current profit 
        } 

        if(profit < 0) {
        leftPointer = rightPointer 
        }

        rightPointer += 1
    };
return max
};