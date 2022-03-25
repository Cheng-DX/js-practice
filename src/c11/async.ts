async function asyncF() {
  console.log('in async function')
  await Promise.reject(1)
  console.log('after await')
}

asyncF()
  .then(res => console.log('res', res))
  .catch(err => console.log('err', err))

async function asyncLog1(...args: any[]) {
  console.log(...(await Promise.all(args)))
}

function asyncLog2(...args: any[]) {
  setTimeout(console.log, 0, ...args)
}

setTimeout(() => console.log('timeout'), 0)
asyncLog1('1', 2, 3)
asyncLog2('time1', 'time2', 'time3')

console.log(0)
;(async () => await Promise.resolve('HAHA'))().then(console.log)

console.log('end')
