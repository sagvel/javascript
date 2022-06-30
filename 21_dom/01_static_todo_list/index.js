'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const rootElement = document.querySelector('.list');

  const listItems = [...tasksList]
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      let listItem = document.createElement('li');
      listItem.classList.add('list__item');
      if (done) {
        listItem.classList.add('list__item_done');
      }
      let checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('list__item-checkbox');
      checkBox.checked = done;
      listItem.append(checkBox, text);

      return listItem;
    });

  rootElement.append(...listItems);
};
