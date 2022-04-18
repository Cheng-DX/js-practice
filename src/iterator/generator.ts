function* gen() {
  console.log('enter')
  let a = yield 1
  let b = yield (function () {
    return 2
  })()
  // return 3
}
var g = gen()
console.log(g)

let timer = null
let fn = () => {
  timer = setTimeout(() => {
    const value = g.next()
    console.log(value)
    if (!value.done) {
      fn()
      console.log(g)
    } else {
      clearTimeout(timer)
      console.log(g)
    }
  }, 1000)
}
fn()

function nTimes1(length: number) {
  return Array.from({ length }, (_, idx) => idx)
}

function* nTimes2(length: number) {
  for (let i = 0; i < length; i++) {
    yield i
  }
}

for (let i of nTimes2(10)) {
  console.log(i)
}
