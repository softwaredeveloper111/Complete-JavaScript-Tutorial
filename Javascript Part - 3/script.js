// setTimeOut with asynchronous 

// console.log('script start');
// function hello(){
//   console.log('hello world');
// }

// setTimeout(hello,2000) // time take in miliseconds
// console.log('script end');






console.log('script start');

const id =setTimeout(()=>{
  console.log('inside setTime out');

},0)

for(let i=1;i<1000;i++){
  console.log("....");
}

console.log(`set time out id is ${id}`);
console.log('clearing time out');
clearTimeout(id)
console.log('script end');