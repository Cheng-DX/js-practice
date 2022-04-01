function* generator(size: number) {
  // for (let i = 0; i < size; i++) {
  //   yield i
  // }
  // return '123'
  console.log('generator')
}
const size = 10

// for (let n of generator(size)) {
//   console.log(n)
// }

let obj = generator(10)
console.log(obj.next())
