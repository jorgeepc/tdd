const Franc = require('./franc')

test('multiplication', () => {
  const five = new Franc(5)
  expect(new Franc(10)).toEqual(five.times(2))
  expect(new Franc(15)).toEqual(five.times(3))
})