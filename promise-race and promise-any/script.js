/**
 * Promise.race returns a new Promise that resolves or
 * rejects as soon as one of the input Promises resolves
 * or rejects, whichever comes first.
 *
 * If the first Promise to resolve is successful, the
 * resulting Promise resolves with that value. If the
 * first Promise to reject encounters an error, the
 * resulting Promise is rejected with that error.
 *
 * Promise.any return the first fullfilled promise.
 */

const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: true, data: "code" });
    }, 1000);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: true, data: "And" });
    }, 100);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: true, data: "Tech" });
    }, 50);
  });

const promiceAny = Promise.any([promise1(), promise2(), promise3()]);
promiceAny
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// const racePromise = Promise.race([promise1() , promise2() , promise3()])
// racePromise.then((result)=>{
//     console.log("result", result);
// }).catch((error)=>{
//     console.log("Error",error);
// })
