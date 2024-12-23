// const colors = ['red','green','yellow','blue','white','pink','hotpink','yellow','magenta']


// let btn = document.querySelector('button')
// let body = document.querySelector('body')
// btn.addEventListener('click',(e)=>{
//   body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// })








const h1 = document.querySelector('h1')
const btn =document.querySelector('button')


btn.addEventListener('click',(e)=>{
  
  const red=Math.floor(Math.random()*256)
  const green=Math.floor(Math.random()*256)
  const blue=Math.floor(Math.random()*256)
  
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
  h1.textContent = `Current Color :rgb(${red},${green},${blue}) `
})

