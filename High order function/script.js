//HOF
/**
 * Higher order functions are functions
 * that take one or more functions as
 * arguments, or return a function as
 * their result.
 * example - setTimeout , setInterval etc
 */

// function sum(a,b){
//     return a+b;
// }

// function diff(a,b){
//     return a-b;
// }

// function calcu(fx , a ,b){
//     return fx(a,b);
// }

// const output = calcu(sum , 10 , 20);
// console.log("output" , output);



//////Second method
// const details = function (con) {
//   if (con == 1) {
//     return function (name) {
//       return `Hi ${name} you are adult`;
//     };
//   } else {
//     return function (age) {
//       return `My age is 26`;
//     };
//   }
// };

// const actionFun = details()
// const finalout = actionFun("satyam");
// console.log(finalout);

