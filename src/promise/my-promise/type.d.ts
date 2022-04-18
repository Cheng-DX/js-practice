export interface MyPromiseType {
  status: string
  value: any
  reason: any
  onResolvedFnList: Array<OnResolvedFn>
  onRejectdFnList: Array<OnRejectdFn>
  onFinallyFnList: Array<Function>
}

export type ResolveFn = (value: unknown) => void
export type RejectFn = (reason?: any) => void

export type PromiseExecFn = (resolve: ResolveFn, reject: RejectFn) => any

export type OnResolvedFn = (value: unknown) => any
export type OnRejectdFn = (reason: any) => any
