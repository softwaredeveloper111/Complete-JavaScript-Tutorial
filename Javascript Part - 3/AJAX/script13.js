//async await
// whenever you apply async keyword before any function this function always return promises.
//await promise ka resolve hone tak wait karega 


// fetch(URL)
// .then(response=>response.json())
// .then(data=>console.log(data));
const URL="https://jsonplaceholder.typicode.com/postss"

async function getPosts(){
  const response = await  fetch(URL)
  if(!response.ok){
     throw new error('something went wrong')
  }
  const data =await response.json()
  return data

}


getPosts()
.then(data=>{console.log(data);})
.catch(error=>{
  console.log('inside catch');
  console.log(error);})