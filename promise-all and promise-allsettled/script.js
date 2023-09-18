/**
Promise.all and Promise.allSettled are used for handling
multiple asynchronous operations in parallel.

//promise.all()
When all promises are resolved, you get all the promises'
results. If any one promise fails, you receive a failed result.

However, Promise.allSettled does not depend on the result
of the promises. It returns the actual results of all 
promises, whether they resolved or rejected.
*/

const promise1 =()=> new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve({status:true,data:"Code and Tech"});
  },1000)
})

const promise2 =()=> new Promise((resolve , reject)=>{
  setTimeout(()=>{
    reject({status:false,data:""});
  },4000)
})

const promise3 = ()=> new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve({status:true,data:"and"});
  },2000)
})

const promiseAllSettled = Promise.allSettled([promise1() ,promise2() ,promise3()])

promiseAllSettled.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error)
})


// const PromiseAll = Promise.all([promise1() ,promise2() ,promise3()])
// PromiseAll.then((result)=>{
// console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })




