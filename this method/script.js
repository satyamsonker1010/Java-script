//this keyword ->
//this keyword use for object only.
//this is a JavaScript keyword which refers to the
//current context or current Object.
// if we are directly use this keyowrd. Then it refer to global object.
const meth = function(){
  console.log(`hi my name is ${this.name} and age is ${this.age}`);
}

let obj = {
  name: "Hello",
  age:26,
  calculation:meth
};

obj.calculation();

let obj2 = {
  name: "code",
  age: 35,
  calculation:meth
};
obj2.calculation();
let obj3 = {
  name: "Tech",
  age:50,
  calculation:meth
};
obj3.calculation();
