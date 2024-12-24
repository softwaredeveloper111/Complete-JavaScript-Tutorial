// understand callback
// we can pass a function as a parameter(callback) to a function.


//version - 1 of callback
// function myFunction1(callback){
// console.log('Function is dong some task 1');
// callback()
// }
// function myFunction2(){
//   console.log('Function is doing task 2 ');
// }
// myFunction1(myFunction2)


// version-2 of callback 
// myFunction1(function(){
//   console.log('fucntion is dong somtask');
// })
// myFunction1(()=>{
//   console.log('you are doing your own task');
// })







// Another example of callback : a function can take as a function as a parameter called callback
function getTwoNumber(num1,num2,onSucess,onFailure){
  if(typeof num1 === "number" && typeof num2=== "number")
  {
    onSucess(num1,num2)
  }
  else{
    onFailure() 
  }

}


getTwoNumber(12,13,(num1,num2)=>{
  console.log(num1+num2);
},()=>{
  console.log('wrong input');
  console.log('please pass number only');
})