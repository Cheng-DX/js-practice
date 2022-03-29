import './apply'

function bind(newThis) {
  var fn = this
  return function () {
    fn.apply1(newThis, arguments)
  }
}

function test(arg1) {
  console.log(this.name, arg1)
}

Function.prototype.bind1 = bind

test.bind1({ name: 'obj1' }, ['arg1'])()
