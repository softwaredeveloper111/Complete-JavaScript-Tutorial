// promise
// future(before name of promise)
// it is asynchrouns ( promise browser(web api) execute karga  )
// promise add in microtask queue not callback queue
// promise ke andar hum ek function pass karenge as a parameter.


console.log('script start');

const bucket = ['coffee','chips','vegetables','salt']
// produce promise

const firedRicePromis = new Promise((resolve,reject)=>{
  if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
    resolve("Fried Rice yummy"); // you can pass any value like string,array,object // resolve is a methods or function
  }
  else{
    reject("Couldn't do it") //// you can pass any value like string,array,object
  }
})






// how to consume promise
// then methods as a input ek callback fucntion lete hai
// resolve se jo value ayega usko receive kar lega myfriedRice.
// reject se jo value ayega usko receive karega error
firedRicePromis.then(
  // jab promise resolve hoga  
  (myfriedRice)=>{
  console.log('lets it',myfriedRice);
     }

     // jab promise reject hoga tab catch chalega
).catch((error)=>{console.log(error);})



setTimeout(()=>{
  console.log('hello from set time out');
},0)

for(let i=0;i<=100;i++){
  console.log(Math.random()*i);
}


console.log('script end');






// note : promise add in microtask que not callback que.
// note : Agar koi data callback que mein bhi hai aur , microtask que mein bhi hai, microtask que pehle jayega callstack
// mein, uske bad callback que execute hogi.
// becz microtask queue prority > callback queue
