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

export default deepClone
