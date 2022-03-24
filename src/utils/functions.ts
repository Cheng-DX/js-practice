export function removeFirstSlash(url: string) {
  return url.startsWith('/') ? url.substring(1) : url
}
export function addURLParams(url: string, params: object) {
  let query = ''
  for (let key in params) {
    query += `&${key}=${params[key]}`
  }
  return url + '?' + query.substring(1)
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}