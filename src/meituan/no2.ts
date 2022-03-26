function main2(n: number, ...args: number[]) {
  let min = Number.MAX_SAFE_INTEGER
  let x = args[0]
  let y = args[n - 1]
  for (let i = 1; i <= n; i++) {
    let distance = Math.abs(args[i] - x) + Math.abs(args[i] - y)
    min = Math.min(min, distance)
  }
  return min
}

let n2 = 2
let line2 = '1 2'

let args = line.split(' ').map(Number)

console.log(main2(n, ...args))
