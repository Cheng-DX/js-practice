import deepClone from '../some/deep-clone'
import { it, expect } from 'vitest'

const temp = {
  name: 'test'
}
let complexObject = {
  a: 'a',
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: [temp, 2, 3, 4, 5],
  f: function () {
    console.log('f', this.b.c++)
  },
  [Symbol.iterator]: function () {
    return {
      next: () => ({
        value: 1,
        done: false
      })
    }
  },
  [Symbol.toStringTag]: 'src',
  h: new Map<any, any>([
    ['key1', temp],
    ['key2', 'value2']
  ]),
  i: new Set<any>([1, 2, 3, 4, 5]),
  // j: new Date(),
  k: new RegExp('abc'),
  l: new Error('error'),
  n: new WeakMap<any, any>([[temp, 'weakMap']]),
  D: undefined,
  E: null,
  F: NaN,
  G: Infinity,
  H: -Infinity,
  I: true,
  J: false
}

complexObject['self'] = complexObject
complexObject.h.set('self', complexObject)

it('should clone an object', () => {
  const clone = deepClone(complexObject)
})
