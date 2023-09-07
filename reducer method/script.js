//Reduce Method
/**

1 - The reduce() method executes a reducer function 
for array element.

2 - The reduce() method returns a single value: the 
function's accumulated result.

3 - The reduce() method does not execute the function 
for empty array elements.

4 - The reduce() method does not change the original 
array.

 */

const numData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//find the sum of array
const output = numData.reduce((acum , current)=>{
    return acum + current  //store this value in accumulator
},0)

console.log(output);

// multiplication of array element
const multiOutput = numData.reduce((acum , current)=>{
    return acum*current
},1)

console.log(multiOutput);



  