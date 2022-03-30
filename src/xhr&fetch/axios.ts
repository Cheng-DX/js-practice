import { removeFirstSlash, addURLParams } from '../utils/functions'
import { nop } from '../utils/shared'
import type { AxiosConfig, Axios, LocalResponse } from './types'

async function dealWithResponse(res: Response) {
  const result: LocalResponse = {
    status: res.status,
    statusText: res.statusText,
    data: JSON.parse(await res.text()),
    headers: res.headers
  }
  return result
}

function createAxios(config: AxiosConfig) {
  const axios: Axios = {
    post: null,
    get: null
  }
  let { base = '', beforeRequest = nop, afterResponse = nop } = config
  base.endsWith('/') || (base += '/')

  axios.get = (url: string, params: object) => {
    url = removeFirstSlash(url)
    if (params) url = addURLParams(url, params)
    beforeRequest()
    return new Promise((resolve, reject) => {
      fetch(base + url)
        .then(res => {
          afterResponse()
          resolve(dealWithResponse(res))
        })
        .catch(err => reject(err))
    })
  }
  axios.post = (url: string, data: any) => {
    url = removeFirstSlash(url)
    beforeRequest()
    return new Promise((resolve, reject) => {
      fetch(base + url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          afterResponse()
          resolve(dealWithResponse(res))
        })
        .catch(err => reject(err))
    })
  }
  return axios
}

export { createAxios }
