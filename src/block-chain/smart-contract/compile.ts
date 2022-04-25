import path from 'path'
import type { Path } from 'path'
import fs from 'fs'
import solc from 'solc'

const contrctPath: Path = path.resolve(__dirname, 'Incrementer.sol')
const source: File = fs.readFileSync(contrctPath, 'utf8')

const input = {
  language: 'Solidity',
  sources: {
    'Incrementer.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}

const tempFile = JSON.parse(solc.compile(JSON.stringify(input)))
const contrctFile = tempFile.contracts['Incrementer.sol']['Incrementer']

export { contrctFile }
