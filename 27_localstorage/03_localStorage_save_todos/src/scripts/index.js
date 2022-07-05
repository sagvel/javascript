import { renderTodos } from './renderTodos.js';
import { initTodoHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTodos();
  initTodoHandlers();
});

// input: event object
// output: undefined
const storageHandler = event => {
  if (event.key !== 'todoList') {
    return;
  }

  renderTodos();
};

window.addEventListener('storage', storageHandler);
