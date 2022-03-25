function createNodes(
  root: HTMLElement,
  whatToShow?: number,
  filter?: NodeFilter
) {
  const iterator = document.createNodeIterator(root, whatToShow, filter)
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
  node.nodeName.toLowerCase() === 'div'
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_SKIP
))
  console.log(node)
