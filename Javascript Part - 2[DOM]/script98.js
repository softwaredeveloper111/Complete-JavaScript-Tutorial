// lexical enviorment and scope chain


const lastName = "Vashistha";

const printName = function(){
  const firstName = "harshit";
  console.log(firstName);
  console.log(lastName);
}

printName()