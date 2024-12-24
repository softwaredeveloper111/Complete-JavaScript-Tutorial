// Synchronous programming vs asynchronous programming 
// synchronus programming
// javascript is synchronus programming single threaded
// synchrous programming can block furthre code.

// console.log('script start !');
// for(let i=0;i<=100;i++){
//   console.log('inside for loop');
// }
// console.log('script end');





//asynchronous programming
//setTimeOut is not a part of javascript , is a part of webApi as browser
// setTimeOut take a function as a parameter and time(milisecond) as a parameter
// console.log('script start');
// function hello(){
  // console.log('hello world');
// }
// setTimeout(hello,3000) // minimum time 3sec ke bad chalega mera hello function //asynchrous code
// console.log('script end');





// setTimeOut with zero second
// setTimeOut return an id
console.log('script start');
const id = setTimeout(()=>{
  console.log('inside settimeout');
},0)

let sum=0
for(let i =0;i<=100000000;i++){
sum+=i
}

console.log('script end');
clearTimeout(id);  // stop the setTimeOut


// conclusion : after execute all the synchronous code in stack , asynchronous
// code will be execute.