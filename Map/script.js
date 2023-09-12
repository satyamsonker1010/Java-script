//Map data structure
/**
 * The Map object is a built-in data structure that
 * allows you to store key-value pairs and provides
 * a way to iterate over the keys in the order of
 * their insertion. You can create a new Map object
 * using the Map constructor.
 *
 *1 - set method user for adding the key and values
 *2 - get method is use for retriving the value
 *3 - has method is use for checking key is available
 *4 - delete method is use for deleating the key
 *
 * for of OR foreach loop can we use for iterable
 */

const mapData = new Map();
mapData.set(10, "code");
mapData.set("a", "and");
mapData.set(true, "value true");
mapData.set(false, false);

for(let [data , d] of mapData){
    console.log(data , d);
}


// mapData.forEach((data)=>{
//    console.log(data);
// })



// mapData.delete(10);
// console.log(mapData.size);

// const objData = {a:"hello" , b:"Data" , c:10};
// for(d in objData){
//     console.log(d);
// }
