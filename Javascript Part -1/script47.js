// block scope vs function scope

//let and const are block scope or bracket scope
//var is function scope



// {
//   let firstName ="harshit"
//   console.log(firstName);
// }


// {
//   const firstName ="mohit"
//   console.log(firstName);
// }

// const firstName =  "garima"
// console.log(firstName);







// if(true){
//   let firstName = "harshit"
//   console.log(firstName);

// }

// console.log(firstName);




function myApp(){
  if(true){
    var firstName = "mohon"
    console.log(firstName);
  }

  if(true){
    console.log(firstName);
  }
  console.log(firstName);
}



myApp()