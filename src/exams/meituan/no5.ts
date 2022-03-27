function main5(n: number, list: any[]) {
  let result = []
  for (let i = 0; i < n; i++) {
    let obj = list[i]
    let time = obj.time
    let depend = obj.depend
    let max = 0
    for (let j = 0; j < depend.length; j++) {
      let id = depend[j]
      let item = list[id - 1]
      let itemTime = item.time
      max = Math.max(max, itemTime)
    }
    result.push(max + time)
  }
  return result
}

function createList(n: number, ...lines: any[]) {
  let list = []
  for (let i = 0; i < n; i++) {
    let line = lines[i]
    let arr = line.split(' ').map(Number)
    let time = arr[0]
    let depend = arr.slice(2)
    let obj = {
      id: i + 1,
      time: time,
      depend: depend
    }
    list.push(obj)
  }
  return list
}
let n = 3
let line: string
let lines = ['1 1 1', '2 1 2', '3 1 3']
const list = createList(n, ...lines)

let result = main5(n, list)
let str = ''
for (let s of result) {
  str += s + ' '
}
console.log(str.trim())
