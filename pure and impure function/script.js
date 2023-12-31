// pure function
/**
 * Pure functions only depend on their
 * input parameters and do not modify
 * the state of the application or have
 * side effects.
 */

//Impure Function
/**
 * Opposite of the Pure Function
 */
var a = 0;
function data() {
  let b = 0;
  console.log("Hello word");
  a++;
  b++;
}

// data();//here data function is impure function
// console.log(a);


var z = 5;
function data(a , b){
   console.log(a+b);
}

data(5,6);// here data function is pure function
console.log('z',z);





function factorial(n){
   let result = 1;
   for(let i =1; i<=n;i++){
      result *= i ;
   }
   return  result;
}

function factorial(n){
   if(n=0){
      return 1;
   }else{
      return n*factorial (n-1)
   }
}