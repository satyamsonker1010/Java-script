//Spread Operator
/**
 * Spread operator allows iterables (array/object/string)
 * to be expended into string arguments/elements.
 * Use three dots for using spread operator.
 *
 * This is a es6 feature
 *
 * example -> array concatenation , copy the array,Object,
 *  function etc.
 *
 */

const array1 = [10, 20, 30, 40, 50];
const array2 = [100, 200, 300 , ...array1];
const array3 = ["a", "b", "c"];

const obj1 = {name:"code" , add:"Tech"};
const obj2 = {country:"India" , state:"Kanpur" , ...obj1 }
const obj3 = {addition:"sum", mul:"*"}





/// Join two object and form new object;
const newObj = {...obj1 , ...obj3}
console.log(newObj);




//Copy Object in another object or Single Copy

// const copyObj = {...obj1};
// for(let a in obj1){
//     copyObj[a]=obj1[a]; 
// }

// console.log(obj2);






/// Using in functions
// function sum(a,b,c,d,e){
//     return a+b+c+d+e;
// }
// const arr = [1,2,3,4,5]
// const sumCount = sum.call({},1,2,3,4,5) 
// const sumCount = sum(1,2,3,4,5)
// const sumCount = sum(...arr);
// console.log(sumCount);




/// Join two array and form new array;

// const newArray = [...array1 , ...array3 ];

// for(let i = 0;i<array1.length;i++){
//     newArray.push(array1[i]);
// }

// for(let j=0;j<array3.length;j++){
//     newArray.push(array3[j]);
// }

// console.log(newArray);




///Copy Array in another array or Single Copy

// for(let i = 0;i<array1.length;i++){
//     array2.push(array1[i]);
//  }

//  console.log(array2);


// const singleCopy = [...array1];
// // for(let i =0 ; i<array1.length;i++){
// //     singleCopy.push(array1[i]);
// // }
// // singleCopy.push(100);
// console.log(singleCopy);










