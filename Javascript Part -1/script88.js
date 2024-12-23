//super keyword

class Animal{
  constructor(name,age){
    this.name =name
    this.age =age

  }

  eat(a){
    return (`${this.name} can eat ${a}`);
  }

  isSuperCute(){
    if(this.age>18){
      return('no');
    }
    else{
      return('yes');
    }
  }

}

// i want to new property speed
class Dog extends Animal{
  constructor(name,age,speed){
     // super keyword indirectly reffers to Animal class
     super(name,age)
     this.speed =speed
  }

  run(){
    return `${this.name} is running at ${this.speed}kem/hour`
  }

  eat(a){
    return `${this.name} is eat evening at the night`
  }

}

const tommy = new Dog('tommy',3 , 45)
console.log(tommy.eat());






//practise 

