//call
/**
the call() method is used to "invoke" a function with
a specified "this" value and arguments provided 
individually and pass arguments one by one.
*/

//apply
/**
the call() method is used to "invoke" a function with
a specified "this" value and arguments provided 
individually and pass arguments one by one.  
*/

//bind
/** 
the .bind() method is used to create a new function.
It allows you to set the context (this) for a function
and "bind" that function to a specific object,
*/

const calulateMethod = function(){
    return `Hi my name is ${this.name}. My age is ${this.age}.`
}

const calulateData = function(){
    return  `hello how r u ${this.name}`
}

const student1 = {
    name:"code",
    age:26,
}


const student2 ={
    name:"Tech",
    age:29,
}


const student3 ={
    name:"Jai",
    age:24,
    
}

const student4 ={
    name:"Suraj",
    age:25,
}
