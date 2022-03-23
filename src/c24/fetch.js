const url = 'https://fetch.spec.whatwg.org/'
const textarea = document.querySelector('.text')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
fetch(url)
  .then(res => res.text())
  .then(text => document.body.innerHTML = text)
