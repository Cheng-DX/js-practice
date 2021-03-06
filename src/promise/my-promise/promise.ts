import { PENDING, FULFILLED, REJECTED } from './shared'
import type {
  PromiseExecFn,
  ResolveFn,
  RejectFn,
  OnResolvedFn,
  OnRejectdFn,
  MyPromiseType
} from './type'
import { then } from './handler/then'
import { myCatch } from './handler/catch'
import { myFinally } from './handler/finally'

import { resolve as staticResolveFn } from './static-functions/promise-resolve'
import { reject as staticRejectFn } from './static-functions/promise-reject'
import { all as staticAllFn } from './static-functions/promise-all'
import { race as staticRaceFn } from './static-functions/promise-race'

function MyPromise(execFn: PromiseExecFn) {
  // MyPromise instance
  const self: MyPromiseType = this
  self.status = PENDING
  self.value = null
  self.reason = null
  self.onResolvedFnList = new Array<OnResolvedFn>()
  self.onRejectdFnList = new Array<OnRejectdFn>()
  self.onFinallyFnList = new Array<Function>()

  const resolveHandler: ResolveFn = function (resolvedValue) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = resolvedValue
        self.onResolvedFnList.forEach(fn => {
          fn(resolvedValue)
        })
        self.onFinallyFnList.forEach(fn => {
          fn()
        })
        self.onResolvedFnList.splice(0, self.onResolvedFnList.length)
      })
    }
  }
  const rejectHandler: RejectFn = function (rejectedReason) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.reason = rejectedReason
        self.onRejectdFnList.forEach(fn => {
          fn(rejectedReason)
        })
        self.onFinallyFnList.forEach(fn => {
          fn()
        })
        self.onRejectdFnList.splice(0, self.onRejectdFnList.length)
      })
    }
  }
  execFn(resolveHandler, rejectHandler)
}

MyPromise.prototype.then = then
MyPromise.prototype.catch = myCatch
MyPromise.prototype.finally = myFinally

MyPromise.resolve = staticResolveFn
MyPromise.reject = staticRejectFn
MyPromise.all = staticAllFn
MyPromise.race = staticRaceFn

export { MyPromise }
