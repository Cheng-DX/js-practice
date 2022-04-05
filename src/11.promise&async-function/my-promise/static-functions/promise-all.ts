import { MyPromise } from '../promise'
import { OnRejectdFn, OnResolvedFn } from '../type'

export function all(args: unknown[]) {
  return new MyPromise((resolve, reject) => {
    let result: any[] = []
    let count = 0
    args.forEach((arg, index) => {
      const promise = MyPromise.resolve(arg)
      promise
        .then((res: OnResolvedFn) => {
          result[index] = res
          count++
          if (count === args.length) {
            resolve(result)
          }
        })
        .catch((err: OnRejectdFn) => {
          reject(err)
        })
    })
  })
}
