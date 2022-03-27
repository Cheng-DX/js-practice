function main3(nums: number[]) {
  let max = 0
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    count++
    if (sum % 7 === 0) {
      max = Math.max(max, sum)
    }
    if (sum < 0) {
      sum = 0
      count = 0
    }
  }
  return max
}

console.log(main3([1, 3, 6, 6]))
