let success = new Promise<string>((resolve, reject) => {
  resolve('success')
})
// setTimeout(console.log, 0, success)

let failure = new Promise<string>((resolve, reject) => {
  reject('error')
})
console.log(failure)

const p = Promise.resolve(20)
let then1 = p.then()

setTimeout(() => {
  const result = Object.getOwnPropertyNames(p).every(keyName => {
    p[keyName] === then1[keyName]
  })
  // console.log(result)
}, 0)

const rejected = Promise.reject('reject')
rejected
  .catch(err => {
    console.log('in then1:', err)
    return 'then1 reject'
  })
  .then(res => {
    console.log('in then2:', res)
    return 'then2 resolve'
  })
  .then(res => console.log('in then3:', res))

function test(ms: number) {
  return new Promise(r => setTimeout(r, ms, 'test'))
}
async function test2() {
  await test(1000)
  console.log('1000ms after')
}
test2()
