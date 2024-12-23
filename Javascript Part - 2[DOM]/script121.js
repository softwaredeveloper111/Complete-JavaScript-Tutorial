// little practise with click event


const btn = document.querySelectorAll('.my-buttons button')

btn.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    e.target.style.color = "grey";
    e.target.style.backgroundColor ="yellow"
  })
}) 