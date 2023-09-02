
// Callback hell
/**
  
Callback hell is a phenomenon that afflicts a Java
Script developer when he tries to execute multiple 
asynchronous operations one after the other.
Some people call it to be the pyramid of doom.  
 
*/

/////Question
//////find the Circumference of a rectangle:
///// if total length get after 2 sec (2L)
///// and total width get after 1.5 sec (2W)

function totalLength(l ,cb){
   setTimeout((l,cb)=>{
    cb(2*l)
   },2000,l ,cb)
}

function totalWidth(w,cb){
    setTimeout((w,cb)=>{
      cb(2*w);
    },1500,w,cb)
    
}

function totalCircumference(w ,l){
     totalLength(l , function cb(result){
        const length = result;
        totalWidth(w,function cb(resultWidth){
            const width = resultWidth;
            const totalCircumference = length+width;
            console.log(totalCircumference);
        });
    });
     
}

totalCircumference(2 , 5)



/////Techniques for avoiding callback hell:
//1 - Using Promises
//2 - Using Async-Await
