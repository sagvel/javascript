import { requestFunc, fetchRepos } from './gateways.js';
import { renderRepos, clrearRepos } from './repos.js';
import { renderFunc } from './user.js';
import { hideSpinner, showSpinner } from './spinner.js';

const inputElem = document.querySelector('.name-form__input');
const btnElem = document.querySelector('.name-form__btn');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderFunc(defaultUser);

const requestUser = () => {
  clrearRepos();
  showSpinner();
  const userName = inputElem.value;
  requestFunc(userName)
    .then(userData => {
      renderFunc(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepos(url))
    .then(reposList => renderRepos(reposList))
    .catch(error => alert(error.message))
    .finally(() => hideSpinner());
};

btnElem.addEventListener('click', requestUser);
