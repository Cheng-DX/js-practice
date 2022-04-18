export default function debounce(fn: Function, delay: number) {
  let timer: number | undefined
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, arguments), delay)
  }
}
