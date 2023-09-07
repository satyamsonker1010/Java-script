//Optional chaining
/**
 * Optional chaining is a feature in JavaScript that allows you to 
 * safely access nested object properties or functions without worrying
 *  about whether the intermediate properties exist or not. 
 * It uses the ?. operator to check for nullish (null or undefined)
 *  values and short-circuits the expression if it encounters one.
 */

const obj = {
    a: {
      b: {
        c: 123
      }
    }
  };
  
  // Without optional chaining
  if (obj && obj.a && obj.a.b && obj.a.b.c) {
    console.log(obj.a.b.c); // output: 123
  }
  
  // With optional chaining
  console.log(obj?.a?.b?.c); // output: 123