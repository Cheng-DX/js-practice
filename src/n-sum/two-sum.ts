export function twoSum(nums: number[], target: number, skip: number = -1) {
  const wanted = new Map<number, number>()
  const results = []
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const want = target - cur

    if (skip === i) {
      continue
    } else {
      if (wanted.get(cur) !== undefined) {
        results.push([i, wanted.get(cur)])
      } else {
        wanted.set(want, i)
      }
    }
  }
  return results.length ? results : []
}
