import './call'

function apply(newThis, args) {
  var fn = this || window
  newThis.__fn__ = fn
  var argStr = ''
  for (var i = 0; i < args.length; i++) {
    argStr += 'args[' + i + '], '
  }
  var result = eval('newThis.__fn__(' + argStr + ')')
  delete newThis.__fn__
  return result
}

Function.prototype.apply1 = apply

// test
var obj1 = {
  name: 'obj1'
}
var obj2 = {
  name: 'obj2'
}

function test(arg1, arg2, arg3, arg4) {
  console.log(this.name, arg1, arg2, arg3, arg4)
}
// test.apply1(obj2, [1, 2, 3, 4])
