// 实现 mergePromise 函数，把传进去的函数数组按顺序先后执行，
// 并且把返回的数据先后放到数组 data 中。

function mergePromise(...args: Array<Function>) {
  let data = []
  let promise: Promise<any> = Promise.resolve()
  for (let fn of args) {
    promise = promise
      .then(() => fn())
      .then(value => {
        data.push(value)
        return data
      })
  }
  return promise
}

const timeout = (ms: number) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

const ajax1 = () =>
  timeout(2000).then(() => {
    console.log('1')
    return 1
  })

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log('2')
    return 2
  })

const ajax3 = () =>
  timeout(2000).then(() => {
    console.log('3')
    return 3
  })

mergePromise(ajax1, ajax2, ajax3).then(data => {
  console.log('done')
  console.log(data)
})
