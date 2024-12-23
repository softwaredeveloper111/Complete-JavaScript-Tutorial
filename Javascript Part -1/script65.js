// sets(it is iterable)
// store data
// sets also hae its own mehtods
// no index-based access
// ordered is not guarantedd
// unique items only (no duplicate allow
// set can store only iterable values like string,array


// const items=['item1','item2','item3']

// const numbers= new Set([1,2,3,4]);
// const numbers= new Set();//empty set
// numbers.add(2)
// numbers.add(3)
// numbers.add(items);
// numbers.add(['item1','item2'])
// both array have different address that why they were different
// numbers.add(['item1','item2'])

// console.log(numbers);


// how to check an element is exit in set or not
// if(numbers.has(2)){
//   console.log('3 is present');
// }
// else{
//   console.log('not present');
// }





// apply for of in set becz it is iterable
// for(const elem of numbers){
//   console.log(elem);
// }



// when to use set
// when you know you have all the unique value



//example
// const myArray = [1,2,4,4,5,6,5,3]
// remove all the duplicate values
// const mySet = new Set(myArray);
// console.log(mySet);


//how to calculate lenght of a set (.lenght property is applicable)
// let length =0
// for(const item of mySet){
//   length++
// }
// console.log("length = ",length);










// practise ????????????????????????? 

const data= new Set([1,2,1,2,3]);
console.log(data);
if(data.has(1)){
  console.log('eixt');
}