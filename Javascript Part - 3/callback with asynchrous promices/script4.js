// promise && setTimeout

// I want to resolve / reject promise after 2sec

const bucket = ['coffee','chips','vegetables','salt','rice']
function myfriedRice(){
  return new Promise(
    (resolve,reject)=>{
       
        if((bucket.includes('rice')) && (bucket.includes('salt')) && (bucket.includes('vegetables'))){
          setTimeout(()=>{
            resolve('you did it');
          },2000)
        }
       
       else{
        setTimeout(()=>{reject('not do it sorry!!')},2000)
       }
    
  }
  )
}

myfriedRice()
.then((rice)=>{console.log(`here your ${rice}`);})
.catch((error)=>{console.log(`sorry not do it ${error}`);})



