import { type AxiosConfig } from './types'
import { createAxios } from './axios'

const config: AxiosConfig = {
  base: 'https://jsonplaceholder.typicode.com/',
  beforeRequest: () => console.log('before'),
  afterResponse: () => console.log('after')
}

const axios = createAxios(config)
axios
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
