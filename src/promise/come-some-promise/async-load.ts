const imageURL =
  'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      console.log(`${url} load end`)
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error(`${url} load error`))
    }
    img.src = url
  })
}

loadImage(imageURL)
  .then((img: HTMLImageElement) => {
    const div = document.createElement('div')
    div.style.height = '500px'
    div.style.width = '500px'
    div.style.overflow = 'scroll'
    div.appendChild(img)
    document.body.appendChild(div)
  })
  .catch(err => {
    console.log(err)
  })

const jsonURL = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(jsonURL).then(res => {
  res.json().then(json => {
    console.log(json)
  })
})
