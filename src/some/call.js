function call(newThis) {
  var fn = this || window
  newThis.__fn__ = fn
  var argStr = ''
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      argStr += 'arguments[' + i + '], '
    }
  }
  var result = eval('newThis.__fn__(' + argStr + ')')
  delete newThis.__fn__
  return result
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
