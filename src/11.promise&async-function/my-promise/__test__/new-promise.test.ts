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
  mp.then((reason: any) => {
    console.log(`MyPromise ${idx} in then : ${reason}`)
  })
    .catch((reason: any) => {
      console.error(`MyPromise ${idx} in catch : ${reason}`)
    })
    .finally(() => {
      console.log('d')
    })
  log(mp)
})
