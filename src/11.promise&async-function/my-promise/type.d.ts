export interface MyPromiseType {
  status: string
  value: any
  reason: any
  onResolvedFnList: Array<onResolvedFn>
  onRejectdFnList: Array<onRejectdFn>
  onFinallyFnList: Array<Function>
}

export type ResolveFn = (value: unknown) => void
export type RejectFn = (reason?: any) => void

export type PromiseExecFn = (resolve: ResolveFn, reject: RejectFn) => any

export type onResolvedFn = (value: unknown) => any
export type onRejectdFn = (reason: any) => any
