import { removeFirstSlash, addURLParams } from 'other/encode-URL'
import { nop } from 'other/shared'
import type { AxiosConfig, Axios, LocalResponse, Options } from './types'

function createRequest(
  method: string,
  url: string,
  params?: object,
  data?: any,
  config?: AxiosConfig,
  options?: Options
) {
  const { header, timeout } = options || {}
  let { base = '', beforeRequest = nop, afterResponse = nop } = config
  base.endsWith('/') || (base += '/')
  url = removeFirstSlash(url)
  if (params) url = addURLParams(url, params)

  return new Promise<LocalResponse>((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
      let headers = {}
      xhr
        .getAllResponseHeaders()
        .split('\n')
        .forEach(line => {
          const [key, value] = line.split(':')
          key && value && (headers[key] = value.trim())
        })
      const res: LocalResponse = {
        status: xhr.status,
        statusText: xhr.statusText,
        data: JSON.parse(xhr.response),
        headers
      }
      xhr.status === 200 ? resolve(res) : reject(res)
    }
    if (timeout) {
      setTimeout(() => {
        xhr.abort()
        reject(`request timeout in ${timeout}`)
      }, timeout)
    }
    xhr.onerror = () => {
      reject(xhr.statusText)
    }
    xhr.onabort = () => {
      reject(`request aborted`)
    }
    xhr.onloadend = () => {
      afterResponse()
    }
    xhr.open(method, base + url)
    for (let headerKey in header) {
      xhr.setRequestHeader(headerKey, header[headerKey])
    }
    beforeRequest()
    xhr.send(data ? JSON.stringify(data) : null)
  })
}
function createAxios(config: AxiosConfig) {
  const get = (url: string, params?: object, options?: Options) =>
    createRequest('GET', url, params, undefined, config, options)

  const post = (url: string, data?: any) =>
    createRequest('POST', url, undefined, data, config)

  const axios: Axios = { get, post }
  return axios
}

export { createAxios }
