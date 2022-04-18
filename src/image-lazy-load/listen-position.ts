const image = document.querySelector('img')

window.addEventListener('scroll', lazyLoad)

function lazyLoad() {
  let viewHeight = document.documentElement.clientHeight
  let scrollTop = document.documentElement.scrollTop

  console.log(viewHeight, scrollTop)
  if (image.offsetTop < viewHeight + scrollTop) {
    if (
      image.getAttribute('src') !==
      'https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'
    )
      return
    image.src = 'https://picsum.photos/200/300?random=1'
  }
}
