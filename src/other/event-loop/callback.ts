// 实现一个回调函数
type MapKey = string | Symbol
type CallbacksItem = {
  once: boolean
  callback: Function
}

function EventEmitter() {
  this.events = new Map<MapKey, CallbacksItem[]>()
}

EventEmitter.prototype.addListener = function (
  type: MapKey,
  callback: Function,
  once: boolean = false
) {
  let callbacks = this.events.get(type) as CallbacksItem[]
  if (!callbacks) {
    callbacks = new Array<CallbacksItem>()
    this.events.set(type, callbacks)
  }
  callbacks.push({
    once,
    callback
  })
}

EventEmitter.prototype.removeListener = function (
  type: MapKey,
  callback: Function
) {
  let callbacks = this.events.get(type) as CallbacksItem[]
  if (!callbacks) {
    throw new Error(`type ${type} does not exist`)
  } else {
    callbacks.filter(item => item.callback !== callback)
  }
}

EventEmitter.prototype.removeAllListener = function (type: MapKey) {
  let callbacks = this.events.get(type) as CallbacksItem[]
  if (!callbacks) {
    throw new Error(`${type} is not a callbacks`)
  } else {
    callbacks.splice(0, callbacks.length)
  }
}

EventEmitter.prototype.emit = function (type: MapKey, ...args: any[]) {
  let callbacks = this.events.get(type) as CallbacksItem[]
  if (!callbacks) {
    throw new Error(`type ${type} does not exist`)
  } else {
    if (callbacks.length > 0) {
      callbacks.forEach(item => {
        item.callback.apply(this, args)
        if (item.once) {
          this.removeListener(item.callback)
        }
      })
    } else {
      throw new Error(`type ${type} exists but has no callback`)
    }
  }
}

EventEmitter.prototype.once = function (type: MapKey, callback: Function) {
  this.addListener(type, callback, true)
}

let e = new EventEmitter()
e.addListener('type', () => {
  console.log('type事件触发!')
})
e.addListener('type', () => {
  console.log('WOW!type事件又触发了!')
})

function f() {
  console.log('type事件我只触发一次')
}
e.once('type', f)
e.emit('type')
e.emit('type')
e.removeAllListener('type')
e.emit('type')
