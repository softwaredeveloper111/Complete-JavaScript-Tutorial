//default parameter

function addTwo(a=0,b=0){
  // if(a==undefined){
  //   a=0
  // }
  // if(b==undefined){
  //   b=0
  // }
  return a+b
}

const ans = addTwo(10,20)
console.log(ans);