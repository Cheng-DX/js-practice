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
