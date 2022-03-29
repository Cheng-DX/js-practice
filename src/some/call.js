function call(newThis) {
  var fn = this
  newThis.__fn__ = fn
  return newThis.__fn__()
}
Function.prototype.newCall = call

function test() {
  console.log(this.name)
}

var obj1 = {
  name: 'obj1'
}
var obj2 = {
  name: 'obj2'
}

test.newCall(obj2)
