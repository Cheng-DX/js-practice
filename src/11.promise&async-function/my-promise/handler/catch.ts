import { MyPromiseType, OnRejectdFn } from '../type'
import { then } from './then'

export function myCatch(onRejectdCallbackFn: OnRejectdFn) {
  const instance: MyPromiseType = this
  return then.call(instance, undefined, onRejectdCallbackFn)
}
