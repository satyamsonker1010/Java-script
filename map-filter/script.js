//Map()
/**
 * map method return the modified array.
 * It doesn't modify the original array; Instead, it creates a new one.
 * Same length array return;
 * it is a immutable method
 */


//Filter()
/**
 * array length not fixed;
 * Filter the array ;
 * it is a immutable method;
 */

const numdata = [10,20,30,40,50];

const filterData = numdata.filter((data)=>{
    return data>30
    });
console.log(filterData);
console.log(numdata);

// const arrMap = numdata.map((d)=> {
//     return d*2
// });
// console.log(arrMap)
// console.log(numdata)

