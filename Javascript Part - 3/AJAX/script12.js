const URL = 'https://jsonplaceholder.typicode.com/posts'

fetch(URL, {
  method: 'POST',
  body: JSON.stringify({ // create json format data
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));