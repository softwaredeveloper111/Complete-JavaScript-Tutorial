// event objects


// const firstButton = document.querySelector('#one')
// firstButton.addEventListener('click',function(event){
  // console.log(this);
//   console.log(event);
// })


// jab bhi mai kisi bhi element pe event listener add karunga,
// js Engine -- line by line execute karta hai
// browser -- js Engine + extra features
// browser --- js Engine + webApi

// jab browser ko pata chala ki user ne event perform kiya jo hum listener kar rahe hai
// browser --2 kam karega
// 1) browser, call back funciton hai , usko js engine ko dega
// 2) callback fucntion ke sath wo jo event hua hai uski information bhi dega
// 3) ye info humein ek object ke form main milegi





// const buttons = document.querySelectorAll('button')


// for(let button of buttons){
//   button.addEventListener('click',(event)=>{
//     // console.log(event);
//     console.log(event.target);
//     console.log(event.currentTarget);

//   })
// }






// practise ????????????????????????????

const button = document.querySelector('.btn')
button.addEventListener('click',function(event){
  console.log(this);
  console.log(event.currentTarget);
})