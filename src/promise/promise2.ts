const p1 = new Promise<string>((reslove, reject) => {
  setTimeout(() => {
    reslove('p1 resolve')
  }, 1000)
})

const p2 = new Promise<string>((reslove, reject) => {
  setTimeout(() => {
    reslove('p2 resolve')
  }, 0)
})

const p3 = new Promise<string>((reslove, reject) => {
  setTimeout(() => {
    reslove('p3 resolve')
  }, 1000)
})

const p4 = new Promise<string>((reslove, reject) => {
  setTimeout(() => {
    reslove('p4 reslove')
  }, 1000)
})

;(async function () {
  await Promise.all([p1, p2, p3, p4])
    .then(res => {
      console.log('res:', res)
    })
    .catch(err => {
      console.log('err:', err)
    })
})()

const r = Promise.reject('reject')
console.log(Promise.resolve(r) === r)
