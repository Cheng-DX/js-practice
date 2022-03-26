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

const nodes = createNodes(document.body, NodeFilter.SHOW_ELEMENT, node => {
  if (node instanceof HTMLElement) {
    return node.tagName.toLowerCase() === 'div'
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_SKIP
  }
  return NodeFilter.FILTER_SKIP
})

for (let node of nodes) console.log(node)

function testq(value: number | Function) {
  return typeof value === 'function' ? value() : value
}

console.log(testq(() => 12))

console.log(testq(12))
