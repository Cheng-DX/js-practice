import { getNode, initNodes, mergeNodes } from './node'
import type { MerkleTree } from './types'

function createMerkleTree(dataList: string[]): MerkleTree {
  let nodes = initNodes(dataList)
  let indexStart = nodes.length
  do {
    nodes = mergeNodes(nodes, indexStart)
    indexStart += nodes.length
  } while (nodes.length > 1)
  return {
    root: nodes[0],
    getNode
  }
}

export { createMerkleTree }
