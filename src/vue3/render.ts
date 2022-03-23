function renderer(domString: string, container: HTMLElement) {
  container.innerHTML = domString
}

renderer('<h1>Hello World</h1>', document.getElementById('app'))
