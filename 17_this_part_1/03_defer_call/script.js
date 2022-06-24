const defer = (func, ms) => {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  }
}

const user = {
  name: 'John',
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const deferCall = defer(user.sayHi, 5000);

deferCall.call({ name: 'Tomas' });