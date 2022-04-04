import { log } from '../shared'
import { MyPromise } from '../promise'

log(MyPromise.resolve(1))
log(MyPromise.reject(1))

log(MyPromise.resolve(MyPromise.resolve(1)))
log(MyPromise.reject(MyPromise.resolve(1)))
