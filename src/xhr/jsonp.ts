function createJsonP() {
  const script = document.createElement('script')
  script.src = '/src/24.xhr&fetch/src.ts'
  document.body.appendChild(script)
}

function callback(data: any) {
  console.log(data)
}

createJsonP()
