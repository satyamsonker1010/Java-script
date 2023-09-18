//Promises
/**
 * Promises are used for handling asynchronous operations.
 * They contain three states (pending, fulfilled, rejected).
 * Promises help solve the callback hell problem and are a modified
 * version of callbacks.
 * Inroduce in ES6
 */

function apiCall() {
  const apiCall = fetch(
    "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
  );

  return apiCall;
}

apiCall()
  .then((response) => {
    return response.json();
  })
  .then((response2) => {
    console.log("Response 1: ", response2);
    return apiCall();
  })
  .then((response3) => {
    return response3.json();
  })
  .then((realResponse) => {
    console.log("Final output", realResponse);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "1", status: true });
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "2", status: true });
//   }, 5000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "3", status: true });
//   }, 7000);
// });

// const promis4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "4", status: true });
//   }, 10000);
// });

// promise
//   .then((response) => {
//     console.log("response 1", response);
//     return promise2;
//   }).then((response2)=>{
//     console.log("response2" , response2);
//     return promise3
//   }).then((response3)=>{
//     console.log("response3" , response3);
//     return promis4
//   }).then((response4)=>{
//     console.log("response4" , response4);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
