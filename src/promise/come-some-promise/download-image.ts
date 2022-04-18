// random image url
const urls = []
for (let i = 0; i < 10; i++) {
  urls.push(`https://picsum.photos/200/300?random=${i}`)
}

// 有 n 个图片资源的 url，已经存储在数组 urls
// 而且已经有一个函数 function loadImg，输入一个 url 链接，返回一个 Promise，
// 该 Promise 在图片下载完成的时候 resolve，下载失败则 reject。

function loadImg(url: string) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve()
    }
    img.onerror = reject
    img.src = url
  })
}

// await version
function loadAllByAwait(urls: string[], max: number) {
  async function inside() {
    const url = urls.shift()
    if (url) {
      await loadImg(urls.shift())
      inside()
    }
  }
  for (let i = 0; i < Math.min(urls.length, max); i++) inside()
}

// normal verison
function loadAll(url: string[], max: number) {
  function inside() {
    const url = urls.shift()
    if (url) {
      loadImg(urls.shift()).then(inside)
    }
  }
  for (let i = 0; i < Math.min(url.length, max); i++) inside()
}

loadAll(urls, 1)
