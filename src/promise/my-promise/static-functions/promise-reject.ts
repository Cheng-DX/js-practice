import { MyPromise } from '../promise'
import type { ResolveFn, RejectFn } from '../type'

export function reject(arg?: unknown) {
  if (!arg) arg = undefined
  return new MyPromise((_: ResolveFn, reject: RejectFn) => {
    reject(arg)
  })
}
