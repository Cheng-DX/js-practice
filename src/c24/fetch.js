const url = 'https://jsonplaceholder.typicode.com/todos/2'
fetch(url)
  .then(res => {
    console.log(res.status, res.statusText)
    return res.text()
  })
  .then(text => console.log(text))
