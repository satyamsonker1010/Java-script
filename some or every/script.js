//some method
/**
 * The some() method tests whether at least one element in
 * the array passes the test implemented by the provided function.
 *  It returns a Boolean value.
 */

//every method
/**
 * The every() method tests whether all elements in the array pass
 * the test implemented by the provided function.
 * It returns a Boolean value.
 */

const arrayone = [10, 20, 30, 40, 50];
const arrayTwo = [100, 200, 300, 400, 10, 50];

const commonArray = arrayone.filter((data)=>{
    return arrayTwo.some((dd)=> {
        if(dd=== data){
            return true
        }else{
            return false
        }
    })
})

console.log(commonArray);


// const commanElement = [];
// for (let i = 0; i < arrayone.length; i++) {
//   for (let j = 0; j < arrayTwo.length; j++) {
//     if (arrayone[i] === arrayTwo[j]) {
//       commanElement.push(arrayone[i]);
//     }
//   }
// }

// console.log(commanElement);




// const output2 = arrayone.every((data)=> data>=10)
// console.log(output2);

// const output = arrayone.some((data)=> data>60)
// console.log(output);

