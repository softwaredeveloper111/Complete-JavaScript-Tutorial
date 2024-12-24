// first crate a objcet
// json -> javascript object natation
//diff b/w json and object in js
// normal javascrip object mein key ko double quotes ke andar likhne ki jarurat nahi hai 
// but json mein key ko double quotes ke andar likha jata hai.



const URL ="https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
//step - 1 use open methods on xhr,opne('get','url')

xhr.open('GET',URL)
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){

//   // console.log(xhr.readyState);
//   if(xhr.readyState===4){
//       // console.log(xhr);
//     // console.log(typeof xhr.response);
//     const response = xhr.response;
//     const data = JSON.parse(response) // convert json file to objct
//     console.log(data);
//   }
// } 
//browser call that function when the state(0,1,2,3,4) was change of xhr , jab xhr ki readystate 4 ho jayega tab json file respond milegi



//onload tabhi chalega jab readystate 4 ho jayega
xhr.onload = function(){
  // console.log(xhr.readyState);
  const response = xhr.response;
  const data = JSON.parse(response) 
  console.log(data);
}


xhr.send()
