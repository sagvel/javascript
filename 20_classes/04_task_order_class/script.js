'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  dateCreated = new Date();
  dateConfirmed = 0;
  isConfirmed = false;
  id = '';

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
      this.id = new String(Math.random());
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    } else {
      return false;
    }
  }
}
