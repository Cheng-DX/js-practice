import { MyPromise } from '../index'
import { log } from '../shared'

Array.from({ length: 2 }, (_, index) => index).forEach(idx => {
  let mp = new MyPromise((resolve, reject) => {
    if (idx === 0) {
      resolve(`${idx} resolved`)
    } else {
      reject(`${idx} rejected`)
    }
  })
  mp.catch((reason: any) => {
    console.error(`MyPromise ${idx} in catch 1: ${reason}`)
  }).catch((reason: any) => {
    console.error(`MyPromise ${idx} in catch 2: ${reason}`)
  })
  log(mp)
})
