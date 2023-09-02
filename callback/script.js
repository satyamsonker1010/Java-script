//callback function
/**
A callback function is a function passed into
another function as an argument, which is then 
invoked inside the outer function to complete
some kind of routine or action.
*/

/** 
If next line of code depend on the output 
of previous code then we can use callback.
Example - Calling the Apis
*/

// function sum(callBack){
//   setTimeout((callBack)=>{
//     callBack("2")
//   },2000 , callBack)
// }

// function example(){
//   console.log("1");
//   sum(function cb(result){
//     console.log(result);
//     console.log("3");
//   });
//   console.log("4");
// }

// example();

// function sum(a,b){
//   return a+b;
// }

// function diff(a,b){
//   return a-b;
// }

// function action(fx , a,b){
//   console.log( fx(a,b)); ///sum(4,3) ///diff(10,2)
// }

// action(sum , 4,3)///sum function is callback function
// action(diff , 10 , 2); //diff is a cb function






