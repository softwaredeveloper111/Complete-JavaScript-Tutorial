//function declaration

// function singhappyBirthday(){
//   console.log('happy birthday to you......');
// }
// singhappyBirthday()


//function expression
// const singhappyBirthday = function(){ //anonymous funciton(function withour name)
//   console.log('happy birthday to you......');
// }
// singhappyBirthday()



//arrow function

const singhappyBirthday = ()=>{
  console.log('happy birthday to you......');
}

singhappyBirthday()


const sumThreeNumbers = (num1,num2,num3)=>{
  return num1+num2+num3
}
console.log(sumThreeNumbers(1,2,3));


//arrow with one parameter no need paranthesis
const isEven = number=>number%2===0 // arrow with one return statement
console.log(isEven(13));


const firstChar = (string)=>string[0]
console.log(firstChar("apu"));



const myfunc = (arry,target)=>{
  for(const elm in arry){
    if(arry[elm] === target){
     
       return elm
    }
 }
 return -1
}
const fruits = ['apple','banana','pineapple']
console.log(myfunc(fruits,'apple'));








// practise????????????????????
