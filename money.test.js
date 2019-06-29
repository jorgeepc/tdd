const Money = require('./money')

test('multiplication', () => {
  let five = Money.dollar(5)
  expect(Money.dollar(10)).toEqual(five.times(2))
  expect(Money.dollar(15)).toEqual(five.times(3))

  five = Money.franc(5)
  expect(Money.franc(10)).toEqual(five.times(2))
  expect(Money.franc(15)).toEqual(five.times(3))
})

test('equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
  expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()
})

test('currency', () => {
  expect(Money.dollar(1).currency()).toEqual('USD')
  expect(Money.franc(1).currency()).toEqual('CHF')
})