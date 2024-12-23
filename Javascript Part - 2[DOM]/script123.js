//keypress event
// mouse over event


// const body = document.body

// body.addEventListener('keypress',(e)=>{
//   console.log(e.key);
// })





const btn = document.querySelector('.btn-headline')
btn.addEventListener('mouseover',()=>{
  console.log('mouse over event fired');
})

btn.addEventListener('mouseleave',()=>{
  console.log('mouse leave event fired');
})