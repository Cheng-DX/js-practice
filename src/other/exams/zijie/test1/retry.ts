import { createAxios } from '../../../../24.xhr&fetch/axios'
import { AxiosConfig } from '../../../../24.xhr&fetch/types'

const config: AxiosConfig = {
  base: 'https://jsonplaceholder.typicode.com/'
}
const axios = createAxios(config)

function retry(promiseFunction: () => Promise<any>, timesLimit: number) {
  return new Promise((resolve, reject) => {
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

retry(() => axios.get('/p'), 10)
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
      console.log('1', res)
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
