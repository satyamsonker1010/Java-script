//call
/**
the call() method is used to "invoke" a function with
a specified "this" value and arguments provided 
individually and pass arguments one by one.
*/

//apply
/**
the call() method is used to "invoke" a function with
a specified "this" value and arguments provided 
individually and pass arguments one by one.  
*/

//bind
/** 
the .bind() method is used to create a new function.
It allows you to set the context (this) for a function
and "bind" that function to a specific object,
*/

const meth = function ( city,country) {
  console.log(`hi my name is ${this.name} and age is ${this.age} and city is ${city} , country ${country}`);
};

let obj = {
  name: "Hello",
  age: 26,
};

 //meth.call(obj , "Delhi", "India")
//meth.apply(obj , ["kanpur","india"])

const mymethod = meth.bind(obj , "lucknow", "india") ///function
mymethod()

console.log(obj);



// let obj2 = {
//   name: "code",
//   age: 35,
//   calculation: meth,
// };

// obj2.calculation();
// console.log(obj2)

// let obj3 = {
//   name: "Tech",
//   age: 50,
//   calculation: meth,
// };
// obj3.calculation();
