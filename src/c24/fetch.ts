const path = 'https://fetch.spec.whatwg.org/'
const textarea: HTMLTextAreaElement = document.querySelector('.text')

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
// fetch(path)
//   .then(res => res.text())
//   .then(text => (document.body.innerHTML = text))

export * from './xhr'
