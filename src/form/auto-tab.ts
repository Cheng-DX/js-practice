const form = document.querySelector('form')
const inputs = form.querySelectorAll('input')

function autoTab(event: KeyboardEvent) {
  let target = event.target
  if (target instanceof HTMLInputElement) {
    if (target.value.length === target.maxLength) {
      for (let i = 0; i < inputs.length; i++) {
        if (target === inputs[i]) {
          const next = inputs[i + 1]
          if (next && next instanceof HTMLInputElement) {
            next.focus()
            break
          }
        }
      }
    }
  }
}

form.addEventListener('keyup', autoTab)
