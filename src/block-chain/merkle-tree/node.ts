import { hashCode } from './hash'
import type { MerkleTree, MerkleTreeNode } from './types'

export function getNode(hash: string) {
  const tree = this as MerkleTree
  const queue = [tree.root]
  while (queue.length > 0) {
    const currentNode = queue.shift()
    if (currentNode.hash === hash) {
      return currentNode
    }
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
  }
  return null
}

export function initNodes(dataList: string[]) {
  const nodes: MerkleTreeNode[] = []
  for (let index = 0; index < dataList.length; index++) {
    const hash = hashCode(dataList[index])
    nodes.push({
      index,
      hash,
      left: null,
      right: null
    })
  }
  return nodes
}

export function mergeNodes(nodes: MerkleTreeNode[], indexStart: number) {
  const newNodes: MerkleTreeNode[] = []

  for (let i = 0; i < nodes.length; i += 2) {
    const newNode: MerkleTreeNode = {
      index: indexStart++,
      hash: '',
      left: nodes[i],
      right: null
    }
    if (i + 1 < nodes.length) {
      newNode.hash = hashCode(nodes[i].hash + nodes[i + 1].hash)
      newNode.right = nodes[i + 1]
    } else {
      newNode.hash = hashCode(nodes[i].hash)
    }
    newNodes.push(newNode)
  }

  return newNodes
}
