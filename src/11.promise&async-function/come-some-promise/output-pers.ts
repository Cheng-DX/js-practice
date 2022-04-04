const arr = [1, 2, 3]

function print() {
  function inside() {
    return new Promise<void>(res => {
      const cur = arr.shift()
      console.log(cur)
      setTimeout(() => {
        res()
      }, 1000)
    }).then(() => {
      if (arr.length > 0) {
        inside()
      } else {
        console.log('the end')
      }
    })
  }
  inside()
}

print()
