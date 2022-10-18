/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const output = []
    const helper = (str, openCount, closeCount) => {
        if(closeCount === n) output.push(str)
        
        if(openCount < n) helper(str + '(', openCount + 1, closeCount)
        
        if(openCount > closeCount) helper(str + ')', openCount, closeCount + 1)
        
    }
    helper("",0,0)
    return output
};