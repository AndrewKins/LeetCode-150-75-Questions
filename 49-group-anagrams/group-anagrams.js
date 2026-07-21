/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     let merge = new Map()
    
    for(const ele of strs){
        let key = ele.split('').sort().join('');
        if(merge.has(key)){
            merge.get(key).push(ele)
        }
        else {
             merge.set(key, [ele])
        }
    }
    return [...merge.values()];
};