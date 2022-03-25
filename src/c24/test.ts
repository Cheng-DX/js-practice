import { type AxiosConfig } from './types'
import { createAxios } from './axios'
import * as fetch from './fetch'

console.log(fetch)

const config: AxiosConfig = {
  base: 'https://jsonplaceholder.typicode.com/',
  beforeRequest: () => console.log('before'),
  afterResponse: () => console.log('after')
}
const newThis = { name: 'I AM THIS' }
const axios = createAxios.call(newThis,config)
axios
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
