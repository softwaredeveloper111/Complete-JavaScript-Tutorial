// static list vs live list
//querySelectorAll hamein static list degi
// getELementsBySomething hamein live list degi

const ul = document.querySelectorAll('.todo-list')
const listItems = ul.getElementByTagName('li')


const sixthli = document.createElement('li')
sixthli.textContent = "item 6"



ul.append(sixthli)
console.log(listItems);