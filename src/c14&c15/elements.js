function createNodes(root, whatToShow, filter) {
  const iterator = document.createNodeIterator(root, whatToShow, filter, false)
  const nodes = {
    [Symbol.iterator]() {
      return {
        next() {
          let node = iterator.nextNode()
          if (node) {
            return {
              value: node,
              done: false
            }
          }
          return {
            done: true
          }
        }
      }
    }
  }
  return nodes
}

for (let node of createNodes(document.body, NodeFilter.SHOW_ELEMENT, node =>
  node.tagName.toLowerCase() === 'div'
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_SKIP
))
  console.log(node.className)
