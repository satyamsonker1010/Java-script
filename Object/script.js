//Object
/**
1 - Multiple values can be stored in a -
    single variable.
2 - It is a non sequential datatype -
    (access the values by help of keys).
3 - Any type of value can be stored here.
4 - When we declare the Object, we use - 
    curly brackets.
5 - it is a non primitive data type.
6 - for-in loop can use.
*/

// const d = [10,20,40,30];
// console.log(d[3])

const hello = {
    age:26,
    count:function(){console.log("Hello")},
    arr:[100,200],
    bool:true,
    name:"code and tech",
}

// console.log(hi["bool"])
// console.log(hi.name)
// console.log(hi.age)
// console.log(hi.count)
// console.log(hi.arr)

for(data in hi){
    console.log( data, "=>" ,hi[data])
}



