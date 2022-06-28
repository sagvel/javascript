'use strict';

class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(value) {
    this.#balance += value;
  }

  withdraw(value) {
    if (value > this.#balance) {
      console.log('No enough funds');
      return;
    }

    this.#balance -= value;
  }
}