// getter and setter

// with the help of get keyword we change the behaviour of a method to a property


class Person{
  constructor(firstName,lastName,age){
    this.firstName = firstName
    this.lastName=lastName
    this.age =age
  }
  

  // getter 
  get fullName(){
    return `My full name is ${this.firstName} ${this.lastName}`
  }

  
  // setName(firstName,lastName){
  //   this.firstName =firstName
  //   this.lastName =lastName
  // }


  // setter 
  set fullName(fullName){
    const [firstName,lastName]=fullName.split(" ")
    //[sourav, giri]
    this.firstName = firstName
    this.lastName =lastName
  
  }
 
}

const person1 = new Person('apu','giri',34)


// console.log(person1.firstName);
// console.log(person1.fullName());
// console.log(person1.fullName);



// person1.setName('souramitra','roy')
// console.log(person1.fullName);




// person1.firstName ='rahul'
// person1.lastName ='mondal'
// console.log(person1.fullName);



// person1.fullName = 'sourav giri'
// console.log(person1.fullName)
// console.log(person1);








// practise ????????????????????


