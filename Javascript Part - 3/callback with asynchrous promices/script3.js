// function return promise

const bucket = ['coffee','chips','vegetables','salt','rice']
function ricePromise(){
  return new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
      resolve("Fried Rice yummy"); // you can pass any value like string,array,object // resolve is a methods or function
    }
    else{
      reject("Couldn't do it") //// you can pass any value like string,array,object
    }
  })
}

ricePromise().then(
   (myfriedRice)=>{
      console.log(`lets eat ${myfriedRice}`);
  }
).catch((error)=>{
  console.log('coudnt do it');
})