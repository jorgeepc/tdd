class Money {
  constructor(amount, currency) {
    this.amount = amount
    this.currencyName = currency
  }

  static dollar(amount) {
    return new Money(amount, 'USD')
  }

  static franc(amount) {
    return new Money(amount, 'CHF')
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currencyName)
  }

  equals(money) {
    return this.amount === money.amount
      && this.currency() === money.currency()
  }

  currency() {
    return this.currencyName
  }
}

module.exports = Money