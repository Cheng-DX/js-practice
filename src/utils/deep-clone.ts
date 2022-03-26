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
  j: new Date(),
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

function _cloneProp(
  src: any,
  target: any,
  key: string | symbol,
  refSet: Set<object>
) {
  const item = src[key]
  if (item === undefined) {
    target[key] = undefined
    return
  }

  if (item === null) {
    target[key] = null
    return
  }
  if (refSet.has(item)) {
    target[key] = item
    return
  }
  if (typeof item === 'object') {
    if (item instanceof Map) {
      let newItem = new Map()
      item.forEach((value: any, key: string | number) => {
        newItem.set(key, value)
      })
      target[key] = newItem
    } else if (item instanceof Set) {
      let newItem = new Set()
      item.forEach((value: any, key: string | number) => {
        newItem.add(value)
      })
      target[key] = newItem
    } else {
      target[key] = deepClone(item)
    }
  } else {
    target[key] = item
  }
  refSet.add(item)
}

function deepClone(src: any) {
  let target = src.constructor ? new src.constructor() : {}
  let refSet = new Set<object>()
  refSet.add(src)
  Object.getOwnPropertyNames(src).forEach(key =>
    _cloneProp(src, target, key, refSet)
  )
  Object.getOwnPropertySymbols(src).forEach(key =>
    _cloneProp(src, target, key, refSet)
  )
  return target
}

let clone = deepClone(complexObject)
console.log(complexObject, clone)
