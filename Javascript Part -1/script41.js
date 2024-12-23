//nested destructuring

const users = [
  {userId:1,firstName:'harshit',gender:'male'},
  {userId:2,firstName:'mohit',gender:'male'},
  {userId:3,firstName:'lilima',gender:'female'}
]

// const [obj1,obj2,obj3] = users
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


const [{firstName:user1firstName,userId},,{gender:user3gender}] = users
console.log(user1firstName)
console.log(user3gender);

console.log(userId);