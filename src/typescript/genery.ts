function echo<T>(content: T): T {
  return content
}

echo(Math.random)

function isNumber(content: string | number): content is number {
  return typeof content === 'number'
}

type Girl = 'girl'
type Boy = 'boy'

type God = Girl | Boy
function godIsGirl(god: God): god is Girl {
  return god === 'girl'
}

function typeGuard(content: string | number) {
  if (isNumber(content)) {
    return content.toExponential()
  } else {
    return content.length
  }
}

// use typeof is ok
function typeGuard2(content: any) {
  if (typeof content === 'undefined') {
    return content
  } else {
    return content.length
  }
}

console.log(typeGuard('1223'))
console.log(typeGuard(1233))
