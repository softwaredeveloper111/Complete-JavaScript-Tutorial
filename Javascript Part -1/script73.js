// arrow funtion 
// arrow funciton ka this nahi hota
// arrow funciton hamesha this ek level upor se lega




const user1={
  firstName:'soruav',
  age:24,
  about:()=>{
    console.log(this);
    console.log(this.firstName,this.age);
  }
}

user1.about()
user1.about.call(user1)




// practise ?????????????????? 

