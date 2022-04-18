import person from './person.json'

interface Person {
  name: string
  description: string
  icon: string
  tierType: number
}

function personParse(person: Person) {
  console.log(person)
}
personParse(person)

let json = `{
  "name":"John",
  "age":30,
  "city":"New York"
}`
function parse(json: string) {
  let obj: object
  eval(`obj = ${json}`)
  return obj
}
console.log(parse(json))
