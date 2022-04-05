import { MyPromiseType, onRejectdFn } from '../type'
import { then } from './then'

export function myCatch(onRejectdCallbackFn: onRejectdFn) {
  const instance: MyPromiseType = this
  return then.call(instance, undefined, onRejectdCallbackFn)
}
