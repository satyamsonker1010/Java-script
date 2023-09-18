/**
In objects, keys are strings.But another key we can assing
by Symbol data type.

Two symbols are not equal if the same descriptor is passed
to both symbols.

Every symbol returns a unique token.

Symbol is a datatype used for making a private property 
in an object.

Symbols are used for making iterable objects.

 */

const symbol1 = Symbol("API-KEY");
const symbol2 = Symbol("API-KEY");
const symbolId = Symbol("Testing");
const objData = {
  name:"Code and Tech" , 
  10:"Hello",
  [symbolId]:"Hello Our Channel name is Code And tech"
}

// for(let key in objData){
//   console.log(key);
// }

console.log(objData[symbolId])



