import { createAxios } from 'fetcher/axios'
import { AxiosConfig, LocalResponse } from 'fetcher/types'

const config: AxiosConfig = {
  base: 'https://jsonplaceholder.typicode.com/',
  beforeRequest: () => {
    console.log('beforeRequest')
  },
  afterResponse: () => {
    console.log('afterResponse')
  }
}
const axios = createAxios(config)

function retry(promiseFunction: () => Promise<any>, timesLimit: number) {
  return new Promise<any>((resolve, reject) => {
    let currentTimes = 0
    const retryPromise = () => {
      promiseFunction()
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          currentTimes++
          if (currentTimes < timesLimit) {
            retryPromise()
          } else {
            reject(err)
          }
        })
    }
    retryPromise()
  })
}

retry(
  () =>
    axios.get('posts/112', undefined, {
      timeout: 200
    }),
  10
)
  .then(res => {
    console.log('final res', res)
  })
  .catch(err => {
    console.log('final err', err)
  })

function retryByAwait(promiseFunction: () => Promise<any>, timesLimit: number) {
  let currentTimes = 0
  const retryPromise = async () => {
    try {
      const res = await promiseFunction()
      return res
    } catch (err) {
      currentTimes++
      if (currentTimes < timesLimit) {
        retryPromise()
      } else {
        throw err
      }
    }
  }
  return retryPromise()
}
