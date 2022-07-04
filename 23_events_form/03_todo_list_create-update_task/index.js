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
  listElem.innerHTML = '';
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
  delPrevTodos();
  listElem.append(...tasksElems);
};

renderTasks(tasks);

// input: event object
// output: undefined

const onToggleTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === event.target.dataset.id);
  Object.assign(taskData, { done: event.target.checked });
  renderTasks(tasks);
};

// input: nothing
// output: undefined
const createNewTodo = () => {
  if (inputElem.value.trim().length === 0) {
    return;
  }

  tasks.push({
    id: String(Date.now()),
    text: inputElem.value,
    done: false,
  });

  inputElem.value = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);
btnElem.addEventListener('click', createNewTodo);
