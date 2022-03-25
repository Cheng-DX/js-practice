interface Number2Number {
  (value: number): any
}

function double(value: number, callback: Number2Number) {
  setTimeout(() => callback(value * 2), 1000)
}

double(2, console.log)
