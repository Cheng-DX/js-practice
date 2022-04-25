import { hashCode } from './hash'
import { createMerkleTree } from './create'
import { MerkleTree, MerkleTreeNode } from './types'

const dataList = 'abcdefg'.split('')

const tree = createMerkleTree(dataList)

function logTree(tree: MerkleTree) {
  const log = (node: MerkleTreeNode, depth: number) => {
    console.log(`${'-'.repeat(depth * 2)}> ${node.index}: ${node.hash}`)
    if (node.left) {
      log(node.left, depth + 1)
    }
    if (node.right) {
      log(node.right, depth + 1)
    }
  }
  log(tree.root, 0)
}

logTree(tree)
console.log(tree.getNode(hashCode('a')))
