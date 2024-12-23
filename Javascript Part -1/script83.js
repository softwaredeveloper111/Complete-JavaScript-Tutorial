
function CreateUser(firstName,lastName,email,age,address){

  
  this.firstName = firstName
  this.lastName = lastName
  this.email= email
  this.age = age
  this.address =address
 

}

CreateUser.prototype.about = function(){
  return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function(){
  return this.age >=18;
}

CreateUser.prototype.sing = function(){
  return "toon na an la la"
}
const user1 =new CreateUser('sourav','giri','souravgiri8032@gmail.com',24,'pichhabani,purbabadalpur,721455,contai,westbengal')




console.log(user1);


// for(let key in user1){
//   // console.log(key);
//   // // // hum e chahate hai ki user1 ki sirf property ayee proto se key na leke ayee
//   if (user1.hasOwnProperty(key)){
//     console.log(key);
//   }
  
  
// }


