async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
async1()
console.log('start')

// rewrite by Promise api
function promise1() {
  console.log('promise1 start')
  promise2().then(() => {
    console.log('promise1 end')
  })
}

function promise2() {
  return new Promise<void>(resolve => {
    console.log('promise2')
    resolve()
  })
}
promise1()
console.log('start')
