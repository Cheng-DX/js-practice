export function log(tar: any) {
  setTimeout(() => {
    console.log(tar)
  })
}

export const PENDING = 'pending'
export const FULFILLED = 'fulfilled'
export const REJECTED = 'rejected'
