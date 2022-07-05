import { setItem, getItem } from './storage.js';
import { renderTodos } from './renderTodos.js';

// input: nothing
// output: undefined
export const createTodo = () => {
  const inputElem = document.querySelector('.task-input');

  const todoText = inputElem.value;

  if (!todoText) {
    return;
  }

  inputElem.value = '';

  const todoList = getItem('tasksList') || [];

  const newTodoList = todoList.concat({
    text: todoText,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem('tasksList', newTodoList);

  renderTodos();
};
