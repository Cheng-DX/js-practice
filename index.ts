import '@/other/exams/zijie/test1/retry'

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

let root: HTMLDivElement = document.querySelector('#flex-box')
root.style['display'] = 'flex'
for (let i = 0; i < 2; i++) {
  let div = document.createElement('div')
  div.classList.add('box')
  div.textContent = `box ${i}`
  let style = {
    width: random(50, 100) + 'px',
    height: random(50, 100) + 'px',
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`,
    color: 'white'
  }
  for (let key in style) {
    div.style[key] = style[key]
  }
  root.appendChild(div)
}
document.body.appendChild(root)
