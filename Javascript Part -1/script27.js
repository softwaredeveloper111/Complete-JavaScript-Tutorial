// how to clone an array


// how to concatenate two arrays.dont modify original array,return an new array
// with the help of  , arr1.concat(arr2)


// let array1 = ['item1','item2']
// let array2 = array1

// console.log(array1 === array2);


//copy an array but this is not right way to copy
// let array1 = ['item1','item2']
// let array2 = ['item1','item2']

// console.log(array1 === array2);
// array1.push('item3')
// console.log("array1",array1);
// console.log("array2",array2);



//clone an array
//use slice mehtod

// let str = "sourav giri"
// console.log(str.slice(0,6)); //slice(start index,end index) end index not included


// 1st way 
// let array1 = ['item1','item2']
// let array2 = array1.slice(0,)
// console.log(array1 ===array2);
// array1.push('item3')
// console.log(array1);
// console.log(array2);


//2nd way
// let array1 = ['item1','item2']
// let array2 = [].concat(array1)
// console.log(array1 === array2);
// array1.push('item3')
// console.log(array1);
// console.log(array2);


// 3rd way recoded for copy
// let array1 = ['item1','item2']
// let array2 = [...array1] //sperad operator
// console.log(array1 ===array2);
// array1.push('item3')
// console.log(array1);
// console.log(array2);




// task 
// let arr1 = ['item1','item2','item3']
// let arr3=['helllo','world']
// let arr2=[...arr1].concat(['item4','itme5'])
// // let arr2=[...arr1,"item4","item5",...arr3]
// console.log(arr1);
// console.log(arr2);










// practise ??????????????//

