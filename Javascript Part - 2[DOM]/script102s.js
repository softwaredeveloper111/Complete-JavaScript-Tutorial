//application of closure
function func(){
  let tract = 0
  return function(){
       
        tract++
        if(tract>1){
          console.log('mai already call ho chuka hu');
        }
        else{
          console.log('hi you called me');
        }
  }
}

const myFunc  =func()
myFunc();
myFunc()
// myFunc()



// const myFunc2 =func()
// myFunc2()
// myFunc2()
// myFunc2()
// myFunc2()