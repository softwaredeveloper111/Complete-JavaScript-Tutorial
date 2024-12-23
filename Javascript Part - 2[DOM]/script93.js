console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

//function declaration
function myFunction(){
  console.log('this is my function');

}

var firstName = "harshit"
var lastName = "sharma"
var fullName = firstName + " "+lastName
console.log(fullName);



// after complete of all  the code execution global execution context pop from stack\
// stack mein currnt execution context rehta hai