// 页面上有一个输入框，两个按钮，A按钮和B按钮，
// 点击A或者B分别会发送一个异步请求，请求完成后，结果会显示在输入框中。

// 题目要求，用户随机点击A和B多次，
// 要求输入框显示结果时，按照用户点击的顺序显示，举例：

// 用户点击了一次A，然后点击一次B，又点击一次A，
// 输入框显示结果的顺序为先显示A异步请求结果，再次显示B的请求结果，最后再次显示A的请求结果。
let btnA: HTMLButtonElement = document.querySelector('#btnA')
let btnB: HTMLButtonElement = document.querySelector('#btnB')
let input: HTMLInputElement = document.querySelector('#input')

let publicPromise = Promise.resolve()
let count = 1
btnA.onclick = function () {
  publicPromise = publicPromise.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
        console.log('a come')
        input.value = 'a' + count++
      }, 1000)
    })
  })
}

btnB.onclick = function () {
  publicPromise = publicPromise.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
        console.log('b come')
        input.value = 'b' + count++
      }, 2000)
    })
  })
}
