// how things work behind the scene 


console.log('script start !!!!!');
const btn = document.querySelectorAll('.my-buttons button')
btn.forEach(function(button){
  button.addEventListener('click',(e)=>{
    let num = 0;
    for(let i=0;i<=1000000000;i++){
      num+=i
    }
      console.log(e.currentTarget.textContent,num);
  })
})

let outerVariable = 0
for(let i=0;i<=100000000;i++){
  outerVariable+=i
}
console.log('value of outer variable is',outerVariable);
console.log('script end !!!!!!');