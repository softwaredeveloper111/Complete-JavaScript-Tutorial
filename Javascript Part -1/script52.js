// function returing function
// higher order funciton


function myFunc(){
  function hello(){
    return "hello world"
  }
  return hello
}

const ans = myFunc();
console.log(ans);
const result = ans()
console.log(result);


//higher order function : as a input function as a parameter or return a 
//funciton or both







// practise ???????????????????????????

