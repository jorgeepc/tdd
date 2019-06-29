class Money {
  constructor(amount, currency) {
    this.amount = amount
    this.currencyName = currency
  }

  equals(money) {
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name
  }

  currency() {
    return this.currencyName
  }
}

module.exports = Money