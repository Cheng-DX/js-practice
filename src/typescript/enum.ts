enum Test {
  Up,
  Down,
  Left,
  Right
}

enum FileAccess {
  // constant members
  None,
  TEST = 3,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length
}

type Keys = typeof FileAccess

function testKey(keys: Keys) {}

console.log(typeof FileAccess)
