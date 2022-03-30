export default function throttle(fn: Function, delay: number) {
  let timer: number | undefined
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}
