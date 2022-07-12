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

const requestUser = async () => {
  clrearRepos();
  showSpinner();

  try {
    const userName = inputElem.value;
    const userData = await requestFunc(userName);
    renderFunc(userData);
    const reposList = await fetchRepos(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

btnElem.addEventListener('click', requestUser);
