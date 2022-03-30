function flat(arr: Array<any>) {
  while (arr.some(a => Array.isArray(a))) {
    arr = [].concat(...arr)
  }
  return arr
}

let a = [1, 2, 3, [4, 5], [6, [7, [8, 9], 10], 11], 12]
console.log(flat(a))
