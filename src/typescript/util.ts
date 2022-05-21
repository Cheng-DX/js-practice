type Src = {
  a: string
  b: number
  c?: boolean
  d: symbol
  e: null
  f: undefined
  g: object
}

/**
 * Make each parameter optional
 */
export type Partial<T> = {
  [P in keyof T]?: T[P]
}
type PartialA = Partial<Src>

/**
 * Make each parameter readonly
 */
export type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
type ReadonlyA = Readonly<Src>

/**
 * Create a new type with K:T
 */
export type Record<K extends string | number | symbol, T> = {
  [P in K]: T
}
type RecordA = Record<'home' | 1, string>

/**
 * Create new type by picking parameter(s) from T
 */
export type Pick<T, U extends keyof T> = { [P in U]: T[P] }
type PickA = Pick<Src, 'a' | 'b'>
type PickB = Pick<Src, 'a'>

/**
 * Create new type by omitting parameter(s) from T
 */
export type Omit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
}
type OmitA = Omit<Src, 'a' | 'b'>
type OmitB = Omit<Src, 'a'>

/**
 * Create a new type by removing types extending U in T
 */
export type Exclude<T, U> = T extends U ? never : T
type ExcludeA = Exclude<Src | 'a', Src>

/**
 * Create a new type by picking types extending U in T
 */
export type Extract<T, U> = T extends U ? T : never
type ExtractA = Extract<'a', Src>

/**
 * Create a new type by removing null and undefined from T
 */
export type NonNullable<T> = T extends null | undefined ? never : T
type NonNullableA = NonNullable<string | number | undefined>

/**
 * Prameter type of function
 */
export type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
type ParametersA = Parameters<(a: string, b: bigint) => void>

/**
 * Prameter type of construtor function
 */
export type ConstructorParameters<T extends new (...args: any[]) => any> =
  T extends new (...args: infer P) => any ? P : never
type ConstructorParametersA = ConstructorParameters<FunctionConstructor>

/**
 * Return type of function
 */
export type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any
type ReturnTypeA = ReturnType<() => string>

/**
 * Create a new type from a constructor's instance
 */
export type InstanceType<T extends new (...args: any[]) => any> =
  T extends new (...args: any[]) => infer R
    ? {
        [K in keyof R]: R[K]
      }
    : any

type InstanceTypeA = InstanceType<PromiseConstructor>

/**
 * Make each parameter required
 */
export type Required<T> = {
  [K in keyof T]-?: T[K]
}
type RequiredA = Required<Src>

/**
 * This type of funtion
 */
export type ThisParameterType<T extends (this: any, ...args: any[]) => any> =
  T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : unknown
function toHex(this: number) {
  return this.toString(16)
}
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}
