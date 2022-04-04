type Skill = string
;(function me() {
  console.log('Hi!👋 It is DXX!')
  const learning: Skill[] = ['JavaScript', 'TypeScript', 'Vue.js', 'Vite']
  const mails: string[] = [
    '2337040896@qq.com',
    'chengdx0925@126.com',
    'chengdx0925@gmail.com'
  ].filter(address =>
    /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(address)
  )
})()
