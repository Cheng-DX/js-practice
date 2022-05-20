export type Pick<T, U extends keyof T> = { [P in U]: T[P] }

export type Omit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
}

export type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

export type Union<T, U> = {
  [P in keyof T]: T[P]
} & {
  [P in keyof U]: U[P]
}

export type Readonlysome<T, U extends keyof T> = Union<
  {
    readonly [P in U]: T[P]
  },
  Omit<T, U>
>

type Src = {
  a: number
  b: string
  c: boolean
}

type A = Readonlysome<Src, 'a' | 'b'>

declare function f<T extends boolean>(x: T): T extends true ? string : number

// Type is 'string | number
let x = f(true)

type ReturnType1<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : any

function A() {
  console.log('1')
}

type Re = ReturnType1<typeof A>
