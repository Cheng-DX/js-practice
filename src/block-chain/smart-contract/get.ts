import Web3 from 'web3'
import { contrctFile } from './compile'

const address = 'address'
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:3001'))

const get = async () => {
  const Incrementer = new web3.eth.Contract(contrctFile.abi, address)
  const count = await Incrementer.methods.count().call()
  console.log('count: ', count)
}

get()
