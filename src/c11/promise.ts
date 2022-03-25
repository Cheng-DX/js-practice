type CatOrDog = 'cat' | 'dog'

let success = new Promise<string>((resolve, reject) => {
  resolve('success')
})
console.log('success:', success)
setTimeout(console.log, 0, success)

let failure = new Promise<string>((resolve, reject) => {
  reject('error')
})

setTimeout(console.log, 0, failure)

const p = Promise.resolve(20)
p.then(value => console.log('then value:', value))
console.log(p)

let pet: CatOrDog = 'cat'
