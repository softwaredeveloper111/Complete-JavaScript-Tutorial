// how to handle error (404)

const URL = "https://jsonplaceholder.typicode.com/posts";


const xhr = new XMLHttpRequest();
xhr.open('GET',URL);

xhr.onload = function(){
  if(xhr.status >=200 && xhr.status<=300){
  const data = xhr.response;
  const obj = JSON.parse(data)
  const id = obj[4].id
  

  const xhr2= new XMLHttpRequest();
  const newURL = `${URL}/${id}`
  
  xhr2.open('GET',newURL);
  xhr2.onload = function(){
    const data2 = JSON.parse(xhr2.response)
    console.log(data2);
  }
 
  xhr2.send()

  
  }else{
    console.log('something went wrong');
  }

}
// if network related error handle
xhr.onerror = ()=>{
  console.log('network error');
}
xhr.send()




