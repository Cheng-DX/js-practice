function main4(n: number, ...args: number[]) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += args[i]
    let a = Math.min(i, n - i - 1)
    sum += a * args[i]
  }
  return sum
}
let args4 = [2, 3, 1, 4]
args = args.sort()
console.log(main4(4, ...args))
