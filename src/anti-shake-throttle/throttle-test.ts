import { createAxios } from '../xhr/axios'
import { AxiosConfig } from '../xhr/types'
import throttle from './throttle'

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
let throttleGet: (s: string) => void = throttle(get, 2000)

input.addEventListener('keyup', event => {
  if (event.target instanceof HTMLInputElement) {
    throttleGet(event.target.value)
  }
})
