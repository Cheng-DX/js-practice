function renderer(domString, container) {
  console.log(document.getElementById('app'))
  container.innerHTML = domString
}

alert('OK')

renderer('<h1>Hello World</h1>', document.getElementById('app'))
