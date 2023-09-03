//function
/**
 * a) function doesn't need any object.
 * b) We can directly call the function- 
 *  with its name.
*/

//Method
/**
 * a) method is a function it is 
 *    depend on object.
 * b) The method is called by
 *    the object's name
 */
///Object
const objectData = {
    name:"code and tech",
    age:function(){console.log("26")}
};
///Function
function data(){
    console.log("Hello");
}

data();
objectData.age();
