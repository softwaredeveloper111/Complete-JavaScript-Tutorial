// how things work behind the scene 


console.log('script start !!!!!');
const btn = document.querySelector('button')
let outerVariable = 0
btn.addEventListener('click',function(){
   
     for(let i=0;i<=10;i++){
     outerVariable+=i;
    }
    console.log(outerVariable);
})


for(let i=0;i<=20;i++){
  outerVariable+=i;
 }
console.log('value of outer variable is',outerVariable);
console.log('script end !!!!!!');