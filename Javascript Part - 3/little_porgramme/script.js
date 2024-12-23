const body = document.querySelector('body')
const btn =document.querySelector('button')

const id = setInterval(()=>{

  const red=Math.floor(Math.random()*256)
  const green=Math.floor(Math.random()*256)
  const blue=Math.floor(Math.random()*256)

  body.style.backgroundColor = `rgb(${red},${green},${blue})`

},1000)


btn.addEventListener('click',(e)=>{
   
clearInterval(id)

})