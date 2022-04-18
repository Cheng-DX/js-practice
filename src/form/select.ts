const select = document.querySelector('select')
const h3 = document.querySelector('textarea')

function log(text: any) {
  h3.textContent = JSON.stringify(
    text,
    (key, value) => (Number(key) <= 10 ? value : undefined),
    4
  )
}
HTMLOptionElement.prototype['toJSON'] = function () {
  return `label: ${this.label},value: ${this.value}`
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
  select.add(randomOption())
  log(select.options)
})

function randomOption() {
  return new Option('label' + Math.random(), 'value' + Math.random())
}
select.add(randomOption())
select.multiple = true

log(select.options)
