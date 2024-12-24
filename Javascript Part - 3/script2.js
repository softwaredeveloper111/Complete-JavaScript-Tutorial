// setTimeInterval 

console.log('script start');
const id=  setInterval(()=>{
  console.log(Math.floor(Math.random()*11)); // generate random number
},1000)
clearInterval(id)
console.log('script end');
