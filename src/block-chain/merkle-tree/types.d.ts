export interface MerkleTree {
  root: MerkleTreeNode
  getNode: (data: string) => MerkleTreeNode
}

export interface MerkleTreeNode {
  index: number
  hash: string
  left: MerkleTreeNode
  right: MerkleTreeNode
}
