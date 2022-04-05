import { MyPromise } from '../index'
import { log } from '../shared'

const promises = []
Array.from({ length: 4 }, (_, index) => index).forEach(idx => {
  let mp = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(`${idx} resolved`), 5000 - idx * 1000)
  })
  promises.push(mp)
})

MyPromise.race(promises).then((res: any) => console.log(res))
