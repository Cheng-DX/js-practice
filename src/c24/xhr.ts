const url = 'https://jsonplaceholder.typicode.com/todos/1'
const fakeUrl = 'test.js'

get2(url)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'))

function get1(url: string) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr)
    xhr.send()
  })
}

function get2(url: string) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const res = xhr.response
        let obj = JSON.parse(res)
        resolve(obj)
      }
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}
