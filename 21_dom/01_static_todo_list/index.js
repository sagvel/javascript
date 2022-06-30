
function renderTasks(todos) {
  const rootElement = document.querySelector('.list');

  const listItems = [...todos]
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
}
