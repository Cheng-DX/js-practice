const href = 'http://wwww.wrox.com/wihd/q?a=a&b=1#location'

// 解析
function parseUrl(url: string) {
  let result = {
    protocol: '',
    hash: '',
    port: '',
    path: '',
    origin: '',
    host: '',
    query: {}
  }
  ;[result.protocol, result.path] = url.split('://')
  let queryString: string
  ;[result.origin, queryString] = url.split('?')
  queryString = queryString.split('#')[0]
  ;[, result.hash] = result.path.split('#')
  if (result.path.indexOf(':')) {
    let port = result.path.split(':')[1]?.split('/')[0]
    result.port = port ? port : '80'
  }
  queryString.split('&').forEach(item => {
    let [key, value] = item.split('=')
    result.query[key] = value
  })
  result.host = result.origin.split('/')[2]
  return result
}

console.log(parseUrl(href))
