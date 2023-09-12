//Array Methods
//shift()
/**
 * The shift() method removes the first element from an array and returns
 * that removed element. This method changes the length of the array.
 * This method is the mutated method.
 */

//unshift
/**
 * The unshift() method adds one or more elements to the beginning of an
 * array and returns the new length of the array.
 * This method is a mutated method.
 */

//reverse
/** We can reverse an array using the reverse() method.
 *  It is a mutated method.
 */

//sort
/**you can use the sort() method to sort the elements of an array
 * it is a mutated method.
 * for accending order maintain by (a-b)
 * for decending order maintain by (b-a)
 * -1 use for swaping and 1 use for non swaping
 * it performs a lexicographic (dictionary) sort.
 */
// aa ab ac ad , ba bb ,bc ,ca,cb,cc


const arr = [5 , -2 , 10 ,30, 20]; ///decreasing order
//a = -2 b = 5   a<b
arr.sort((a,b)=> b-a


// {
//     if(a<b){
//         return -1
//     }

//     if(b<a){
//         return 1;
//     }
// }

);
 console.log(arr);






// const arr = [10, 20, 30, 200 , 2000000];
// const arr2 = ["bird" , "apple"];
// arr2.sort();
// arr.sort();
// console.log(arr2);







// arr.reverse();
// console.log(arr);

// arr.push(100)
// // arr.unshift(100 , 200)
// console.log(arr);

// const shiftMethod = arr.shift();
// const popMethod = arr.pop();
// console.log(arr);
