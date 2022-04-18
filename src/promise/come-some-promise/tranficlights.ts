function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

function lights() {
  function lightRed() {
    new Promise<void>(res => {
      setTimeout(() => {
        red()
        res()
      }, 3000)
    }).then(lightRed)
  }
  function lightGreen() {
    new Promise<void>(res => {
      setTimeout(() => {
        green()
        res()
      }, 2000)
    }).then(lightGreen)
  }
  function lightYellow() {
    new Promise<void>(res => {
      setTimeout(() => {
        yellow()
        res()
      }, 1000)
    }).then(lightYellow)
  }

  lightRed()
  lightGreen()
  lightYellow()
}

// lights()
