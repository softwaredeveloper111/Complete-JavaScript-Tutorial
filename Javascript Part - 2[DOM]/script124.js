// event bubbling / event propogation
// event capturing
// event deligation




//event bubbling : whenver you click an child element , then uska parent element pe agar same event hai to wo call bakc ho
// jayega
// const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')


// child.addEventListener('click',()=>{
//   console.log('you click in child');
// })


// parent.addEventListener('click',()=>{
//   console.log('you click in parent');
// })

// grandparent.addEventListener('click',()=>{
//   console.log('you click in grandparent');
// })


// document.body.addEventListener('click',()=>{
//   console.log('you click in body');
// })






// event capturng : 

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

//capture
// child.addEventListener('click',()=>{
//   console.log('capture child');
// },true)


// parent.addEventListener('click',()=>{
//   console.log('caputure in parent');
// },true)

// grandparent.addEventListener('click',()=>{
//   console.log('capture in grandparent');
// },true)


// document.body.addEventListener('click',()=>{
//   console.log('capture in body');
// },true)





// not capture
// child.addEventListener('click',()=>{
//   console.log('bubble in child');
// })


// parent.addEventListener('click',()=>{
//   console.log('bubble in parent');
// })

// grandparent.addEventListener('click',()=>{
//   console.log('bubble in grandparent');
// })


// document.body.addEventListener('click',()=>{
//   console.log('bubble in body');
// })





//event deligation : you dont need set event for different div . just set event on parent it will apply on its child

// const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

grandparent.addEventListener('click',(e)=>{
  console.log(e.target);
})