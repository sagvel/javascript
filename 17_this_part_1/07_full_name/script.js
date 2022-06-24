const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },

  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
}

console.log(user.getFullName());
console.log(user.setFullName('Berck Johnson'));
console.log(user.getFullName());