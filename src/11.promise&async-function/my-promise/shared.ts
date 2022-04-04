export function log(tar: any, delay: number = 0) {
  setTimeout(() => {
    console.log(tar)
  }, delay)
}

export const PENDING = 'pending'
export const FULFILLED = 'fulfilled'
export const REJECTED = 'rejected'
