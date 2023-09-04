//HOF
/**
 * Higher order functions are functions
 * that take one or more functions as
 * arguments, or return a function as
 * their result.
 * example - setTimeout , setInterval etc
 */

// const add =(a,b)=>{
//    return a+b;
// }
// const minus =(a,b)=>{
//     return a-b;
// }

// const cal = (fx ,a ,b)=>{
//     return fx(a,b); ///add(5 ,10)
// }
// // cal is a HOF
// const calculationData = cal(add , 5 , 10)
// const subtraction = cal(minus , 10 ,5)
// console.log(calculationData);
// console.log(subtraction);

/// data function is HOF
const data = function (count) {
  if ((count == 1)) {
    return function (name) {
      console.log(
        `hi our channel name is
                 ${name}`
      );
    };
  } else {
    return function () {
      console.log("hi my age is 26");
    };
  }
};
const output = data();
output()


