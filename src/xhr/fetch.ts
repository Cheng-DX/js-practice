const path = 'https://fetch.spec.whatwg.org/'
const textarea: HTMLTextAreaElement = document.querySelector('.text')

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


export * from './xhr'
