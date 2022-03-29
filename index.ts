import './src/some/apply'

let button = document.querySelector('button')

let outSideDiv = document.querySelector('#outside')
function addSpan() {
  let span = document.createElement('span')
  span.textContent = 'Hello'
  outSideDiv.appendChild(span)
}

button.addEventListener('click', addSpan)

outSideDiv.addEventListener('click', function (event) {
  if (event.target instanceof HTMLSpanElement) {
    event.target.style.color = '#fff'
  }
})
