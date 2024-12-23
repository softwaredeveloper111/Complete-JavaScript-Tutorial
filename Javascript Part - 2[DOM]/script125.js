const form = document.querySelector('.form-todo')
const text =document.querySelector('.form-todo input[type="text')
const todolist =document.querySelector('.todo-list')

form.addEventListener('submit',(e)=>{
  e.preventDefault() // for stop automatioc brwoser refresh
  const newTodo=(text.value);
  const newLi = document.createElement('li')
  const newLiinnerHtml = `
    <span class="text">${newTodo}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
   `
   newLi.innerHTML = newLiinnerHtml
   todolist.append(newLi)
  text.value =""
})




//use of event deligation
todolist.addEventListener('click',(e)=>{
  if(e.target.classList.contains('remove')){
    const parentli = e.target.parentNode.parentNode;
    parentli.remove()
  }
  if(e.target.classList.contains('done')){
    const lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = 'line-through'

  }
})