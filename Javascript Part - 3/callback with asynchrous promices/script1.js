// callback, callback hell, pyramid of doom
// asynchronus programming

const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')

// callback hell
// setTimeout(()=>{
//   heading1.textContent = "heading 1";
//   heading1.style.color ="violet";

//   setTimeout(()=>{

//     heading2.textContent ="heading 2"
//     heading2.style.color ="purple"

//     setTimeout(()=>{
//       heading3.textContent ="heading 3"
//       heading3.style.color="red";

//       setTimeout(() => {
//         heading4.textContent ="heading 4"
//         heading4.style.color ="pink"

//         setTimeout(() => {

//           heading5.textContent ="heading 5"
//           heading5.style.color ="green"

//           setTimeout(() => {
//             heading6.textContent ="heading 6"
//             heading6.style.color ="blue"

//             setTimeout(() => {
//               heading7.textContent ="heading 7"
//               heading7.style.color ="brown"
//             }, 1000);
//           }, 3000);

//         }, 2000);
//       }, 1000);

//     },2000)

//   },2000)

// },1000)




function changeText(element, text, color, time, onSuccesscallback, onFailureCallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text
      element.style.color = color
      onSuccesscallback()
    }
    else {

      onFailureCallback()
    }
  }, time) 

}

// pyramid of doom

changeText(heading1, "heading 1", "purple", 2000, () => {

  changeText(heading2, "heading 2", "hotpink", 1000, () => {

    changeText(heading3, "heading 3", "blue", 2000, () => {

      changeText(heading4, "heading 4", "hotpink", 2000, () => {

        changeText(heading5, "heading 5", "magenta", 1000, () => {
          changeText(heading6, "heading 6", "maroon", 1000, () => {
            changeText(heading7, "heading 7", "yellow", 3000, () => {

            }, () => { console.log('element does not exit') })

          }, () => { console.log('element does not exit') })

        }, () => { console.log('element does not exit') })

      }, () => { console.log('element does not exit') })
    }, () => { console.log('element does not exit') })

  }, () => { console.log('element does not exit') })
}, () => { console.log('element does not exit') })










// practise ???????????????

