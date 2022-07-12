/**
 * @param {string} s
 * @return {string[]}
 */
/*
P
    -Series of ACGT
    -identify repeated sequences
    -return all 10 letter long sequences (sub strings)
    that occue more than once return in any order
E
D
A
    -initialize a hashMap *freqcounter*
    -check the hashMap
    -If character is there ++
    -if not = to 1 
C
*/
var findRepeatedDnaSequences = function(s) {
   let hashMap = {}
   let newString = [];
    for(let i = 0; i <= s.length - 9; i++){
        let subS = s.substring(i, i + 10)
        // console.log(subS)
    if(!hashMap[subS]){
        hashMap[subS] = 1
    } else
        hashMap[subS]++
    }
    for(let ele in hashMap){
        if(hashMap[ele] > 1){
            console.log(hashMap[ele])
            newString.push(ele)
        }
    }
    return newString
};