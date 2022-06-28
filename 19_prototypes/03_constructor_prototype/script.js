'use strict';

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }

  this.age = age;

  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  if (age > 0) {
    return age;
  }

  return this.age;
}

const userJohn = new User('John', 26);

console.log(userJohn);
console.log(userJohn.setAge(23));
console.log(userJohn.setAge(-2));
console.log(userJohn.setAge(45));
console.log(userJohn.age);