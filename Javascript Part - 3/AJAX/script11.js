// fetch api
// fetch return a promise
// fetch tab reject hota hai jab koi network related issue hota hai,
// otherseide koi reject nahi hoga even 404 vi nahi

// so now question is how you handle 404 error in fetch

const URL ="https://jsonplaceholder.typicode.com/postss"
const result = fetch(URL)
result.then(
  (response)=>{
   if(response.ok){
   return response.json()
   }else{
    throw new Error("something went worng");
    
   }
  }
).then(
  (data)=>{
    console.log(data);
  }
).catch(
  (error)=>{
    console.log('inside catchs');
    console.log(error);
  }
)