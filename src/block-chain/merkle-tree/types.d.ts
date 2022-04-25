export interface MerkleTree {
  root: MerkleTreeNode
  getNode: (hash: string) => MerkleTreeNode
}

export interface MerkleTreeNode {
  index: number
  hash: string
  left: MerkleTreeNode
  right: MerkleTreeNode
}
