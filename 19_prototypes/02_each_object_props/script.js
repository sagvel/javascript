'use strict';

function getOwnProps(obj) {
  const filteredObj = Object.entries(obj).filter(([key, value]) => typeof value !== 'function');
  return Object.keys(Object.fromEntries(filteredObj));
}

const obj1 = {
  name: 'John',

  sayHi() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

console.log(getOwnProps(obj1));