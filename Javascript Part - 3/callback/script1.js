// promise
// future
// it is asynchrouns  
// promise add in microtask queue


const bucket = ['coffee','chips','vegetables','salt','rice']
const firedRicePromis = new Promise((resolve,reject)=>{
  if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
    resolve("Fried Rice yummy"); // you can pass any value like string,array,object
  }
  else{
    reject("Couldn't do it") //// you can pass any value like string,array,object
  }
})

// produce




// consume
// how to consume
firedRicePromis.then(
  // jab promise resolve hoga
  (myfriedRice)=>{
  console.log('lets it',myfriedRice);
     }
).catch((error)=>{console.log(error);})
// jab promise reject hoga tab cathc chalega