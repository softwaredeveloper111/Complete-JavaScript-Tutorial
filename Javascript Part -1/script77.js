const userMethods = {
  about : function(){
    return `${this.firstName} is ${this.age} years old`;
  }
 ,
  is18 : function(){
    return this.age >=18;
  },

  sing : function(){
    return "toon na an la la"
  }

}

function createUser(firstName,lastName,email,age,address){
  const user = {}
  user.firstName = firstName
  user.lastName = lastName
  user.email= email
  user.age = age
  user.address =address
  user.about = userMethods.about // here we pass reference of above funciton
  user.is18 = userMethods.is18
  user.sing = userMethods.sing
 
  return user
}



const user1 = createUser('sourav','giri','souravgiri8032@gmail.com',24,'pichhabani,purbabadalpur,721455,contai,westbengal')
const user2 = createUser('mohit','giri','souravgiri8032@gmail.com',24,'pichhabani,purbabadalpur,721455,contai,westbengal')
const user3 = createUser('nitish','giri','souravgiri8032@gmail.com',24,'pichhabani,purbabadalpur,721455,contai,westbengal')
// if i made 1 milion users with this abouve funciton then,
// in that 1 milinon objct inside there this two method //
// isme memory ka inefficiecy ho raha hai

console.log(user1.about());
console.log(user3.about());
console.log(user1.sing());




// agar mein ek  hazar mehtod hai, upor funciton mein so mujhe us ek hazar method
// ko alak se add karna parega create user namok funciton mein , aur agar mein
// kisi ek mehtod ko add karna vul jata hoon tab kya hoga....?







// pracitise??????????????????????????????? 

