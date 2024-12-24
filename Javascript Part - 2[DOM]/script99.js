//closures
// closure : 30-40%
// analyse : 70-80%
//real example : 100%

// function can return function


// function outerFunction(){
//   function innerFuction(){
//     console.log('hello world');
//   }
//   return innerFuction
// }


// const ans = outerFunction()
// console.log(ans);
// console.log(ans());










// function printFullName(firstName,lastName){
//     function printName(){
//       console.log(firstName,lastName);
//     }
//     return printName
//   }
  
  
//   const ans = printFullName('sourav','giri')
//   // console.log(ans); 
// ans()



//closure : whenver parent funciton return child funciton
// child funciotn always return with her local memory's variable
// outer funcion ki variable ko agar mein inner funcion mein istemal
// karun usko hum closure bolte hai





// practise ?????????????????????????

// const outerFunction = function(fname,lname){
//   function fullName(){
//     console.log(`${fname} ${lname}`);
//   }
//   return fullName
// }

// const u1=outerFunction('sourav','giri')
// u1()



