import { MyPromise } from '../index'
import { log } from '../shared'

Array.from({ length: 2 }, (_, index) => index).forEach(idx => {
  let mp = new MyPromise((resolve, reject) => {
    if (idx === 0) {
      resolve(`${idx} resolved`)
    } else {
      reject(`${idx} rejected`)
    }
  }).then((value: any) => {
    console.log(value)
  })
  log(mp)
})
