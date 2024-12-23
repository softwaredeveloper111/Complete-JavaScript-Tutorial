// this keyword :in event listener this alway refer to the element , jiske upor even listener apply ho raha hay
// but in the case of arrow funciton this point to window object

const btn  = document.querySelector('.btn-headline')
btn.addEventListener('click',function(){
  console.log('you click me');
  console.log(this);
})