function pluck<T, U extends keyof T>(src: T, keys: U[] | U) {
  if (Array.isArray(keys)) {
    return keys.map(key => src[key])
  } else {
    return src[keys]
  }
}

console.log(
  pluck(
    {
      a: 1,
      b: 2,
      c: 3
    },
    ['a', 'b', 'c']
  )
)
