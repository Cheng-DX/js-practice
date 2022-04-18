async function foreach() {
  let arr = [4, 2, 1]
  arr.forEach(async item => {
    const res = await handle(item)
    console.log(res)
  })
  console.log('结束')
}

function handle(x: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 1000 * x)
  })
}

// foreach()

function t(num: number) {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
  console.log(res)
  return res
}

;(async x => console.log(await t(x)))(1)
;(async x => console.log(await t(x)))(2)
;(async x => console.log(await t(x)))(3)

// ;[1, 2, 3].forEach(async x => console.log(await t(x)))
