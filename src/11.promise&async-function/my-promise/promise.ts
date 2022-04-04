/**
 * 来自己写一个promise吧
 * - 由于JavaScript接触不到微任务的分配,直接用宏任务模拟即可
 * - 包含三种状态且能够正确切换
 * - 支持多个回调函数的绑定
 * - then的返回值问题
 * - catch异常事件冒泡
 * - Promise.resolve(),Promise.reject()
 * - finally
 * - Promise.all(),Promise.rece()
 */
import { PENDING, FULFILLED, REJECTED } from './shared'
import type {
  PromiseExecFn,
  ResolveFn,
  RejectFn,
  onResolvedFn,
  onRejectdFn,
  MyPromiseType
} from './type'
import { then } from './then'

function MyPromise(execFn: PromiseExecFn) {
  // MyPromise instance
  const self: MyPromiseType = this
  self.status = PENDING
  self.value = null
  self.reason = null
  self.onResolvedFnList = new Array<onResolvedFn>()
  self.onRejectdFnList = new Array<onRejectdFn>()

  const resolve: ResolveFn = function (resolvedValue) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = resolvedValue
        self.onResolvedFnList.forEach(fn => {
          fn(resolvedValue)
        })
        self.onResolvedFnList.splice(0, self.onResolvedFnList.length)
      })
    }
  }
  const reject: RejectFn = function (rejectedReason) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.reason = rejectedReason
        self.onRejectdFnList.forEach(fn => {
          fn(rejectedReason)
        })
        self.onRejectdFnList.splice(0, self.onRejectdFnList.length)
      })
    }
  }
  execFn(resolve, reject)
}

MyPromise.prototype.then = then

export { MyPromise }
