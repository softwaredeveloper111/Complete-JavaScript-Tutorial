// // reduce method


// const numbers= [1,2,3,4,5,10]
// // aim : sum of all the numbers in array 
// const sum = numbers.reduce((accumulator,currentValue)=>{
//  return accumulator+currentValue
// },0) // initial value of accumulator

// // console.log(sum);

// // accumulator , current value ,return 
// // 1               2              3
// // 3               3              6
// // 6               4              10
// // 10              5              15
// // 15             10              25





// //Example

const userCart = [

  {productId:"1",ProductName:'mobile',price:1200},
  {productId:"2",ProductName:"Laptop",price:2200},
  {productId:"3",ProductName:'Tv',price:1500},
  // {productId:"4",ProductName:"bag",price:340}

]


const totalPrice = userCart.reduce((accumulator,currentValue)=>{
   return accumulator+currentValue["price"]
},0)
console.log(`The total price is ${totalPrice}`);










// pracitse ????????????????????????????????//



