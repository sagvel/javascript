import { setItem, getItem } from './storage.js';
import { renderTodos } from './renderTodos.js';

// input: event object
// output: undefined
export const toggleStatusTodo = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const todoList = getItem('todoList');

  const newTodoList = todoList.map(todo => {
    if (todo.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...todo,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return todo;
  });

  setItem('todoList', newTodoList);

  renderTodos();
};
