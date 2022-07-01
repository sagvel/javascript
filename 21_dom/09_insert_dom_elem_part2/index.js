// input: undefined
// output: undefined

// 1. create html elem 'li'
// 2. inner text in to 'li'
// 3. Use methods append, prepend, before, after for filling 'ul'

export const finishList = () => {
  const rootElem = document.querySelector('.list');
  const specElem = document.querySelector('.special');
  const listElemNum1 = document.createElement('li');
  const listElemNum4 = document.createElement('li');
  const listElemNum6 = document.createElement('li');
  const listElemNum8 = document.createElement('li');

  listElemNum1.textContent = '1';
  listElemNum4.textContent = '4';
  listElemNum6.textContent = '6';
  listElemNum8.textContent = '8';

  rootElem.prepend(listElemNum1);
  specElem.before(listElemNum4);
  specElem.after(listElemNum6);
  rootElem.append(listElemNum8);
};

// test data
// finishList();
