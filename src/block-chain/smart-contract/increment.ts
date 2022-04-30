import Web3 from 'web3'
import { contrctFile } from './compile'

const bytecode = contrctFile.evm.bytecode.object
const abi = contrctFile.abi

const privateKey = 'private key'
const address = 'address'
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:3001'))
const _value = 3

const Incrementer = new web3.eth.Contract(abi)
const encodedABI = Incrementer.methods.reset(_value).encodeABI()

const incrementet = async () => {
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: address,
      to: contrctFile.address,
      data: encodedABI,
      gas: '1000000'
    },
    privateKey
  )

  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  )
}

incrementet()
