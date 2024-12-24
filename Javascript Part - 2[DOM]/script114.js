// static list vs live list
//querySelectorAll hamein static list degi
// getELementsBySomething hamein live list degi






const myList = document.querySelector('.todolist'); 


const listItems = myList.querySelectorAll('li');


const sixthli = document.createElement('li');
sixthli.textContent = "item 6";


myList.append(sixthli);


console.log(listItems);
