import { MyPromise } from '../promise'
import type { ResolveFn } from '../type'

export function resolve(arg?: unknown) {
  if (!arg) arg = undefined
  if (arg instanceof MyPromise) {
    return arg
  } else {
    return new MyPromise((resolve: ResolveFn) => {
      resolve(arg)
    })
  }
}
