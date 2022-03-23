/**
 * @param {number[]} arr
 * @return {number}
 */
var lengthOfLIS = function (arr) {
  const p = arr.slice()
  const result = [0]

  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[i] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
}

const arr = [0, 1, 0, 3, 2, 3]

function mine(arr) {
  let max = 1
  let result = max
  const len = arr.length
  let pre = arr[0]
  for (let i = 1; i < len; i++) {
    const cur = arr[i]
    if (cur > pre) {
      result++
    } else {
      if (result > max) {
        max = result
      }
      result = 1
    }
    pre = cur
  }
  if (result > max) {
    max = result
  }
  return max
}

console.log(lengthOfLIS(arr))