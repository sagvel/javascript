const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'john@mail.com' },
    { name: 'Bob', age: 16, email: 'bob@mail.com' },
    { name: 'Alice', age: 19, email: 'alice@mail.com' },
    { name: 'Anna', age: 20, email: 'anna@mail.com' }
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Dear ${name}! ${this.message}`,
        email,
      }))
  }
}

console.log(event.getInvitations());