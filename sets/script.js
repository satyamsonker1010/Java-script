//Sets
/**
 * A Set is a built-in data structure that represents
 * a collection of unique values.Unique is not just unique 
 * by values but also by types
 * It allows you to store and manipulate distinct values,-
 * ensuring that no duplicates are allowed.
 * Here Size proparty work (Length not work)
 * "Add" method is use for adding the element. return the set.
 * "delete" method id use for deleating the element form the set . return the true and false.
 * "has" method is use for checking that element is present or not in set. return true and false
 *  for each and for of loop can use in set
 * In string we can also use set
 * we can convert set in array by two methods.
 * a) spread operator
 * b) Array.form(passing the set);
 */

let mysetData = new Set([10 , "hello" , "10"]);
mysetData.add("code and tech")
mysetData.delete(10)

const spreadArr = [...mysetData];
const ArrData = Array.from(mysetData);
console.log(ArrData[1]);


// console.log(mysetData.has(10))
// console.log(mysetData.size);
// console.log(mysetData);

// for(let data of mysetData){
//     console.log(data);
// }

// mysetData.forEach((d)=>{
//     console.log(d);
// })




