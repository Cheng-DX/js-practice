// 设计一个基本的并发控制函数，要有以下3个参数：
// list {Array} - 要迭代的数组
// limit {number} - 控制的并发数量
// asyncHandle {function} - 对list的每一个项的处理函数

function concurrent(list: Array<any>, limit: number, asyncHandle: Function) {
  return new Promise<string[]>((resolve, reject) => {
    let idx = 0
    let result = []
    let mount = 0
    function inside() {
      if (idx < list.length) {
        const dataIdx = idx
        const item = list[idx++]
        mount++
        asyncHandle(item)
          .then((data: string) => {
            mount--
            result[dataIdx] = data
            if (mount === 0) {
              resolve(result)
            } else {
              inside()
            }
          })
          .catch((err: any) => reject(err))
      }
    }
    for (let i = 0; i < limit; i++) inside()
  })
}

const dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123]
let count1 = 0
concurrent(dataLists, 3, (curItem: number) => {
  return new Promise<string>((resolve, reject) => {
    count1++
    setTimeout(() => {
      console.log(curItem, '当前并发量:', count1--)
      if (curItem > 4) reject('error happen')
      resolve(`${curItem} success`)
    }, 1000)
  })
}).then(response => {
  console.log('finish', response)
})
