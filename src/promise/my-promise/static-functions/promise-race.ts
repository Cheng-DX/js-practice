import { MyPromise } from '../promise'

export function race(args: unknown[]) {
  return new MyPromise((resolve, reject) => {
    args.forEach(arg => {
      const promise = MyPromise.resolve(arg)
      promise.then(resolve).catch(reject)
    })
  })
}
