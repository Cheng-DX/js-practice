import { MyPromiseType, onRejectdFn, onResolvedFn } from '../type'

export function then(
  onResolvedCallbackFn: onResolvedFn,
  onRejectdCallbackFn: onRejectdFn
) {
  const instance: MyPromiseType = this
  if (onResolvedCallbackFn) instance.onResolvedFnList.push(onResolvedCallbackFn)
  if (onRejectdCallbackFn) instance.onRejectdFnList.push(onRejectdCallbackFn)
}
