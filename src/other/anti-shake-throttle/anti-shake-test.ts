import { createAxios } from 'fetcher/axios'
import { AxiosConfig } from 'fetcher/types'
import debounce from './anti-shake'

const config: AxiosConfig = {
  base: 'https://jsonplaceholder.typicode.com/'
}
const axios = createAxios(config)

let input = document.querySelector('input')
let textarea = document.querySelector('textarea')

function get(url: string) {
  axios
    .get(url)
    .then(res => (textarea.value = JSON.stringify(res.data)))
    .catch(err => console.log(err))
}
let debouncedGet: (s: string) => void = debounce(get, 500)

input.addEventListener('keyup', event => {
  if (event.target instanceof HTMLInputElement) {
    debouncedGet(event.target.value)
  }
})
