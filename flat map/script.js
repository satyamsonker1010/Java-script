/**
 * flatMap is a combination of flat method and map method.
 * 
 * Map method manupulate the array.
 * 
 * flat method faltten the array and increase the length of 
 * array
 */
const demoArr = ["code" , "and" , "tech"];
//output ["c","o","d","e","a","n","d","t","e","c","h"];

// const flatMapBothUse = demoArr.map((ele)=> ele.split("")).flat()
// console.log(flatMapBothUse)

const flatMap = demoArr.flatMap((ele)=> ele.split(""));
console.log(flatMap);



// const outPutArray = []
// for(let i=0;i<demoArr.length;i++){
//     const selectElement = demoArr[i];
//     for(let j=0;j<selectElement.length;j++){
//         const character = selectElement.charAt(j);
//         outPutArray.push(character);
//     }
// }
// console.log(outPutArray);











// const array = [1,2,3,4];
// const mapArray = array.map((a)=> a*2);
// console.log(mapArray);
// const flatArray = mapArray.flat();
// console.log(flatArray);
