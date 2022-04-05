/**
 * 来自己写一个promise吧
 * - 由于JavaScript接触不到微任务的分配,直接用宏任务模拟即可 checked
 * - 包含三种状态且能够正确切换 checked
 * - 支持多个回调函数的绑定 checked
 * - then的返回值问题 checked
 * - catch异常事件冒泡 checkd
 * - Promise.resolve(),Promise.reject() checked
 * - finally checked
 * - Promise.all(),Promise.rece()
 */
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
import { resolve as staticResolveFn } from './static-functions/promise-resolve'
import { reject as staticRejectFn } from './static-functions/promise-reject'
import { myFinally } from './handler/finally'
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
