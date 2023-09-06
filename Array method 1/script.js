//.at() => we are find the element from the array.
//If index are known. 
//we can pass negative index also.
//it is a immutable method

//.concat() => Combine the two or more arrays 
//or adding the value in array.
// it is a immutable method. it return  new Array.

//.join() => Join the elements of array in string.
//its take a optional separator as an argument.
//it is a immutable method

//.slice() =>  this method in JavaScript is used to extract a
// portion of an array and return it as a new array without 
//modifying the original array. 
//its take two argument start index(include) and end index(not include);
// its return the array
//it is a immutable method

//.indexof() => this method in JavaScript is used to find the 
//first occurrence of a specified element or value within an array.
//its take a two argument - value and fromIndex. fromIndex is optional.
//it is a immutable method
// if element not found then return -1 index



const arr1 = [10,20,30,40,50];
const arr2 = ["Hello" , "hai", "Code" ,"and", "Tech","and"];


const indexFind = arr2.indexOf("and" ,4)
console.log(indexFind);



// const sliceArr = arr1.slice(1 ,3 );
// console.log(sliceArr);









// const data1 = arr1.at(3);
// console.log(data1);
// const d = arr1.at(-1)
// console.log(d)
//console.log(arr1[arr1.length-1])


// const newarr = arr1.concat(arr2);
// const revArr = arr2.concat(arr1);
// console.log(revArr)

// const newItemAdd = arr1.concat(100);
// console.log(newItemAdd);

// const jionMethod = arr1.join(" * ");
// console.log(jionMethod);




