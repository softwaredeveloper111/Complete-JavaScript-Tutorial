// innerHtml


const headline = document.querySelector('.headline')
// console.log(headline.innerHTML);
headline.innerHTML = " <h1>innter html changed</h1>"
headline.innerHTML += "<button class=\"btn btn-headline\">submit</button>"
console.log(headline.innerHTML);