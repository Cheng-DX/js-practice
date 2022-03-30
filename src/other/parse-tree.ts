const srcObj = {
  'a.b.c.d': 'value1',
  'a.b.c.d.e': 'value2',
  'e.f': 'value2',
  g: 'value3',
  'h.i.j': 'value4',
  'k.l.m': 'value5'
}

function parseToTree(src: object) {
  let target = {}
  for (let key in src) {
    const keyArr = key.split('.')
    if (keyArr.length === 1) target[key] = src[key]
    else {
      let root = {}
      let cur = {}
      root = cur
      for (let i = 1; i < keyArr.length; i++) {
        const subKey = keyArr[i]
        if (subKey === keyArr[keyArr.length - 1]) {
          cur[subKey] = src[key]
        } else {
          cur[subKey] = {}
          cur = cur[subKey]
        }
      }
      target[keyArr[0]] = root
    }
  }
  return target
}

console.log(parseToTree(srcObj))
