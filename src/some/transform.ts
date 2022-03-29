let src = 'hello world'

function transform(src: string) {
  let words = src.split(' ')
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join('')
}

console.log(transform(src))

function transform2(src: string, spread: string) {
  let target = src
  for (let char of src) {
    if (char.match(/[A-Z]/)) {
      target = target.replace(char, spread + char.toLowerCase())
    }
  }
  return target
}

console.log(transform2('fNooGetName', '_'))
