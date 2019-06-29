class Money {
  constructor(amount, currency) {
    this.amount = amount
    this.currencyName = currency
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