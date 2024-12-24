// anylise the code 

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

//function declaration
function myFunction(){
  console.log('this is my function');

}

var firstName = "harshit"
var lastName = "sharma"
var fullName = firstName + " "+lastName
console.log(fullName);


// Global exection contex add in stack data structure.
// after execute  all  the code , global execution context pop from stack
// stack mein currnt execution context rehta hai