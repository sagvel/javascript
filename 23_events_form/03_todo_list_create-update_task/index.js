const tasks = [
  { id: String(Date.now() + 1), text: 'Buy milk', done: false },
  { id: String(Date.now() + 2), text: 'Pick up Tom from airport', done: false },
  { id: String(Date.now() + 3), text: 'Visit party', done: false },
  { id: String(Date.now() + 4), text: 'Visit doctor', done: true },
  { id: String(Date.now() + 5), text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

// input: nothing
// output: undefined
function delPrevTodos() {
  const listItems = document.querySelectorAll('.list__item');
  listItems.forEach(item => item.remove());
}

// render function
// input: array
// output: undefined
const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// input: event object
// output: undefined
const checkboxHandler = event => {
  const doneTodos = tasks.map(todo => {
    if (todo.id === event.target.dataset.id) {
      // eslint-disable-next-line no-param-reassign
      todo.done = !todo.done;
    }

    return todo;
  });

  delPrevTodos();
  renderTasks(doneTodos);
};

// input: event object
// output: undefined
const inputHandler = event => {
  const inputValue = event.target.value;
};

// input: nothing
// output: undefined
const creatNewTodo = () => {
  if (inputElem.value.trim().length === 0) {
    return;
  }

  tasks.push({
    id: String(Date.now()),
    text: inputElem.value,
    done: false,
  });

  inputElem.value = '';
  delPrevTodos();
  renderTasks(tasks);
};

listElem.addEventListener('click', checkboxHandler);
inputElem.addEventListener('change', inputHandler);
btnElem.addEventListener('click', creatNewTodo);
