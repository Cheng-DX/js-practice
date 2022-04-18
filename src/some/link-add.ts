// 实现一个方法，使得：add(2, 5) 和 add(2)(5) 的结果都为 7
function add(x: number, y?: number): any {
  if (!y) {
    return (y: number) => add(x, y)
  }
  return x + y
}

console.log(add(2, 5))
console.log(add(2)(5))
