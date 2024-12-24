//Promise resolve 
// promise chaining


// const myPromise = Promise.resolve(5);
// myPromise
// .then((value)=>{console.log(value);})


// then() method always return promise.



function myPromise(){
  return new Promise((resolve,reject)=>{
    resolve('foo')
  })
}

myPromise()
.then((value)=>{
  console.log(value);
  value+='bar'
  return value // internally Promise.resolve(value) return kar raha hai //then hum promise ke upor apply kar sakte hai.
  //agar hum return nahi karegen to javascript internally return Promise.resolve(undefined) ko return kar dega.
})
.then((value)=>{
  console.log(value);
  value+='bazz'
  return value
})
.then((value)=>{
  console.log(value);
})