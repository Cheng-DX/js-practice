/**
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * Example 2:
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * Example 3:
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 */

function isNumber(x: any) {
  return /[0-9]/.test(x)
}

const decodeString = function (src: string) {
  let numStack: number[] = []
  let strStack: string[] = []

  let lastCharIsNumber = false

  for (let char of src) {
    if (isNumber(char)) {
      if (lastCharIsNumber) {
        numStack[numStack.length - 1] =
          numStack[numStack.length - 1] * 10 + Number(char)
      } else {
        numStack.push(Number(char))
      }
      lastCharIsNumber = true
    } else if (char === ']') {
      lastCharIsNumber = false
      let value = ''
      let item = strStack.pop()
      while (item !== '[') {
        value = item + value
        item = strStack.pop()
      }
      const times = numStack.pop()
      strStack.push(value.repeat(times))
    } else {
      lastCharIsNumber = false
      strStack.push(char)
    }
  }

  let result = ''
  for (let i = 0; i < strStack.length; i++) {
    result += strStack[i]
  }
  return result
}

export { decodeString }
