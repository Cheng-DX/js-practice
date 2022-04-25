import { twoSum } from './two-sum'

export function threeSum(nums: number[], target: number) {
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const want = target - cur
    const results = twoSum(nums, want, i)
    if (results.length > 0) {
      for (let result of results) {
        const r = [...result, i]
        ans.push([...result, i])
      }
    }
  }
  return ans.length ? ans : []
}
