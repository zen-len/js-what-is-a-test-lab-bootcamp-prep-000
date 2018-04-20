// write your code below!
var name = "Susan"
var height = 39
var message = ` is ${height} inches tall`
describe ('Name',()=>{it('returns"Susan"',() => { 
  expect(index.name).toEqual('Susan')
})})
describe ("Height",()=>
{ it("is lessthan 40",() => {
  expect(index.height).toBeLessThan(40)})})

module.exports = {name, height, message}

