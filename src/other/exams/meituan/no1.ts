function main1(s: string) {
  if (!s) return 0
  let countOfb = 0,
    countOfc = 0,
    countOfa = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      countOfb++
    } else if (s[i] === 'c') {
      countOfc++
    } else if (s[i] === 'a') {
      countOfa++
    }
  }

  countOfa += countOfa - 2
  console.log(countOfb, countOfc, countOfa)
  return Math.min(countOfa / 2, countOfb, countOfc / 3)
}

console.log(main1('acbccacbccacbccacccbbcbcca'))
