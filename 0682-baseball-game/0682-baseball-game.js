/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []
    let result = 0;
    for(let i = 0; i < operations.length; i += 1 ){
        if(operations[i] === 'D'){
            stack.push(stack[stack.length - 1] * 2)
        } else if (operations[i] === '+'){
                stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }  else if (operations[i] === 'C'){
            stack.pop()
        } else
            stack.push(Number(operations[i]))
    }
    for(let num of stack){
        result += num
    }
    return result
};