//Default Value
/**
 * In a js default parameter allow to you to assign default
 * value to function parameter. In case they are not provide
 * when function called. This feature are introduce in ES6.
 * This is more convient way to handling the missing value or
 * undefined value in function parameter.
 */

// Rest Operator
/**
 * Rest syntex is a just opposite of spread operator.
 * It collect the data and stores that data in a variable
 * which we can use further in our code.
 */

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ,200,300,400];


const [a, b, ...otherVal] = arr;


function sum1(a, b) {
  return a + b;
}

function sum2(c, d, e, f, g, h, i, j ,k,l,m) {
  return c + d + e + f + g + h + i + j+k+l+m;
}

const callSum1 = sum1(a, b);
const callSum2 = sum2(...otherVal);

console.log(callSum1);
console.log(callSum2);

///default value
// function sum(a=1,b=2 ){
//   return a+b;
// }

// const countSum = sum()
// console.log(countSum);
