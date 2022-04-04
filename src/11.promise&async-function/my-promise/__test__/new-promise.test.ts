import { MyPromise } from '../index'
import { log } from '../shared'

Array.from({ length: 2 }, (_, index) => index).forEach(idx => {
  let mp = new MyPromise((resolve, reject) => {
    if (idx === 0) {
      setTimeout(() => resolve(`${idx} resolved`), 1000)
    } else {
      reject(`${idx} rejected`)
    }
  })
  mp.then((value: any) => {
    console.log(`MyPromise ${idx} in then 1: ${value}`)
  })

  mp.then((value: any) => {
    console.log(`MyPromise ${idx} in then 2: ${value}`)
  })

  mp.catch((reason: any) => {
    console.error(`MyPromise ${idx} in catch 1: ${reason}`)
  })

  mp.catch((reason: any) => {
    console.error(`MyPromise ${idx} in catch 2: ${reason}`)
  })
  log(mp)
})
