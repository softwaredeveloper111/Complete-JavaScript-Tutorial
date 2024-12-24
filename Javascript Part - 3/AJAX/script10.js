// using promise rather than callback 

const URL  = "https://jsonplaceholder.typicode.com/posts"



function sendRequest(mehtod,url){
  return new Promise(
    (resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(mehtod,url);
      xhr.onload  = function(){
        if(xhr.status>=200 && xhr.status<=300){
        resolve( JSON.parse(xhr.response))
        }
        else{
          reject(new Error('something went wrong'));
        }
      }
      xhr.onerror = function(){
        reject(new Error('network error'))
      }
      xhr.send()
    }
  )
}

sendRequest("GET",URL)
.then(
  (data)=>{
     return data
  }
)
.then(
  (data)=>{
    const id = data[3].id;
    return id;
  }
)
.then(
  (id)=>{
    const newUrl = `${URL}/${id}`
    console.log(newUrl);
   return sendRequest('GET',newUrl)
  }
)
.then(
  (newResponse)=>{
    console.log(newResponse);
  }
)
.catch(
  (error)=>{console.log(error);}
)