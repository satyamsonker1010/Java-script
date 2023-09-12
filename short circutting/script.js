//Short-circuiting
/**
 * Short-circuiting in JavaScript is a behavior that occurs when
 * evaluating logical expressions involving boolean operators (&& and ||).
 * When all value is true then Short-circuiting work.
 * Its contain two cases 1 -> && Case  2-> || case
 */

//truthy value = true , 10 , "0" , "a" , "Hello" , {} ,[]
//falsy value = false , 0 ,"" , undefined , null

// && operator => print those value where executuion stop;
// || operator => first true value return;

//short-circuiting is a useful technique for
//optimizing code and ensuring that expressions
//are evaluated in a way that avoids unnecessary
//work and potential errors.

let a = 10 && "Code and tech";
     console.log(a);

let b = "code and Tech" && "Satyam" && "" && 1000;
   console.log(b);

let f = "" && "Hello";
  console.log(f)

let c = "code" || "with" || "Tech";
console.log(c)

let d = "" || "Javascript" || 0 || "Java";
console.log(d)

let e = (false && !false )|| (true && true);
        //(fasle && true) || (true)
        //(false) || (true)
        //true
console.log(e);
