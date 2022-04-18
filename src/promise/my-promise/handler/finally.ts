import { FULFILLED, nop, PENDING, REJECTED } from '../shared'
import { MyPromiseType } from '../type'

export function myFinally(finallyFn: Function = nop) {
  const instance: MyPromiseType = this

  if (instance.status === PENDING) {
    instance.onFinallyFnList.push(finallyFn)
  } else if (instance.status === FULFILLED || instance.status === REJECTED) {
    finallyFn()
  } else {
    throw new Error('status error')
  }

  return instance
}
