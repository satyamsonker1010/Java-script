//question 1
var g = 0;
g = 1 && g++;
console.log(g);

//question 2
console.log(employeeId);
var employeeId = "19000";

//question 3
var aa = 1.2;
console.log(typeof aa);

////question 5
const a = { msg: "Hi" };
const b = a;
b.msg = "Hello";
console.log(a, b);

////question 5
var num = 8;
var num = 10;
console.log(num);

////question 6
(() => {
  let x = (y = 10);
})();
console.log(typeof x);
console.log(typeof y);

//////question 7
const nameData = "Swarna";
age = 21;
console.log(delete nameData);
console.log(age);

////// question 8
const nameUser = "Akhil Sunder";
console.log(nameUser.padStart(13));
console.log(nameUser.padStart(2));

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// // Expected output: "************5581"


///question 9
console.log(isNaN("hai")); //its conver str to number also

////question 10
console.log(0.1 + 0.2 == 0.3); 

//// question 11
console.log(false == "0"); 
console.log(false === "0");


///// question 12
var x = 10;
if (x) {
  let x = 4;
}
console.log(x); 