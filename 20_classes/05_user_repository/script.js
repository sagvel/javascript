/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
    Object.freeze(this._users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name);
  }

  getUserIds() {
    return this._users.map(user => user.id);
  }

  getUserNameById(id) {
    return this._users.find(user => user.id === id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// testing data

const user1 = new User('1', 'Tom', 'session-id1');
const user2 = new User('2', 'Bob', 'session-id2');
const user3 = new User('3', 'Karl', 'session-id3');

const usersData = [user1, user2, user3];
// console.log(usersData);
const usersRepo = new UserRepository(usersData);
console.log(usersRepo.users[0].id);
console.log(usersRepo.getUserNames());
console.log(usersRepo.getUserIds());
console.log(usersRepo.getUserNameById('1'));