//this keyword
//this keyword use for object only.
//this is a JavaScript keyword which refers to the
//current context or current Object.
// if we are directly use this keyowrd. Then it refer to global object.

let obj = {
  name: "Hello",
  printName: function (a, b) {
    return `our channel name is ${this.name}. a and b is ${a}, ${b}`;
  },
};
let obj2 = {
  name: "code",
};

let obj3 = {
  name: "Tech",
};

let met = obj.printName;

let secObj = met.call(obj2, 2, 3);
let thirdObj = met.call(obj3, 5, 7);

console.log(secObj);
console.log(thirdObj);
