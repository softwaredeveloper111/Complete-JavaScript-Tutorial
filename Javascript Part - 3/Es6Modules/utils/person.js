export default class Person{
  constructor(firstname,lastName,age){
    this.firstname =firstname;
    this.lastName =lastName;
    this.age =age
  }

  info(){
    console.log(`${this.firstname} ${this.lastName} ${this.age}`);
  }
}

export  class Person2{
  constructor(firstname,lastName,age){
    this.firstname =firstname;
    this.lastName =lastName;
    this.age =age
  }

  info(){
    console.log(`${this.firstname} ${this.lastName} ${this.age}`);
  }
}

