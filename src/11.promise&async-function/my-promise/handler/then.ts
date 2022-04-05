import { MyPromise } from '../promise'
import { FULFILLED, PENDING, REJECTED, nop } from '../shared'
import {
  MyPromiseType,
  onRejectdFn,
  onResolvedFn,
  RejectFn,
  ResolveFn
} from '../type'

export function then(
  onResolvedCallbackFn: onResolvedFn = nop,
  onRejectdCallbackFn: onRejectdFn = err => {
    throw err
  }
) {
  const instance: MyPromiseType = this
  let thenPromise = null
  if (instance.status === PENDING) {
    // return a new MyPromise instanc
    thenPromise = new MyPromise((resolve, reject) => {
      instance.onResolvedFnList.push(value => {
        try {
          const result = onResolvedCallbackFn(value)
          unwrapResult(instance, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
      instance.onRejectdFnList.push(reason => {
        try {
          const result = onRejectdCallbackFn(reason)
          unwrapResult(instance, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  } else if (instance.status === FULFILLED) {
    thenPromise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = onResolvedCallbackFn(instance.value)
          unwrapResult(instance, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  } else if (instance.status === REJECTED) {
    thenPromise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = onRejectdCallbackFn(instance.reason)
          unwrapResult(instance, result, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  } else {
    throw new Error('status error')
  }
  return thenPromise
}

function unwrapResult(
  instance: MyPromiseType,
  result: any,
  resolve: ResolveFn,
  reject: RejectFn
) {
  if ((result as MyPromiseType) instanceof MyPromise) {
    if (result.status === PENDING) {
      result
        .then((y: any) => {
          unwrapResult(instance, y, resolve, reject)
        })
        .catch((err: any) => {
          reject(err)
        })
    } else {
      result.then(resolve, reject)
    }
  } else {
    resolve(result)
  }
}
