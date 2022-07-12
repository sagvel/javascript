const listElem = document.querySelector('.repo-list');

export const clrearRepos = () => {
  listElem.innerHTML = '';
};

export const renderRepos = reposList => {
  const reposListItems = reposList.map(({ name }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('repo-list__item');
    listItem.textContent = name;

    return listItem;
  });

  clrearRepos();
  listElem.append(...reposListItems);
};
