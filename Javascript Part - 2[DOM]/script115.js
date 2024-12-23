// how to get the dimensions of an element
// height widht


const todo = document.querySelector('.todo-list')
// const info =todo.getBoundingClientRect();
const info =todo.getBoundingClientRect().height;
// const info =todo.getBoundingClientRect().width;

console.log(info);

