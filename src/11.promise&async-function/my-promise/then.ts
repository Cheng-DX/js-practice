import { MyPromiseType, onResolvedFn } from './type'

export function then(onResolvedCallbackFn: onResolvedFn) {
  const instance: MyPromiseType = this
  instance.onResolvedFnList.push(onResolvedCallbackFn)
}
