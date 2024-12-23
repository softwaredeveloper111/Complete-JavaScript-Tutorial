// we cannot use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach loop
// we can use three type of loop with node list


let navItems = document.getElementsByTagName('a')  // return an html collection
// for(let i=0;i<navItems.length;i++){
//    const temp = navItems[i]
//    temp.style.color = "magenta"
//    temp.style.backgroundColor = "blue"
//    temp.style.fontWeight ="bold"
// }
 


// for(let item of navItems){

//      item.style.color = "magenta"
//      item.style.backgroundColor = "blue"
//      item.style.fontWeight ="bold"
  
// }


navItems = Array.from(navItems) // convert html collection to array
navItems.forEach((item,index) => {
  item.style.color = "magenta"
     item.style.backgroundColor = "blue"
     item.style.fontWeight ="bold"
});

console.log(Array.isArray(navItems));