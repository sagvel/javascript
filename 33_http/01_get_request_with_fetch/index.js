// algo
// 1. get dom elements and save to variables -> button, input, img(avatar), name(span), location(span)
// 2. save base part og url to variable
// 3. create requestFunc function
// 4. create requestUser function with needed url and call request function with correrct url
// 4.1 get part of url from input field
// 5. create event for button and call mix function
// 6. create render function that call in to .then method after ajax works

const imgElem = document.querySelector('.user__avatar');
const inputElem = document.querySelector('.name-form__input');
const btnElem = document.querySelector('.name-form__btn');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const BASE_URL = 'https://api.github.com/users/';

// input: string
// output: promise
const requestFunc = userUrl => {
  return fetch(`${BASE_URL}${userUrl}`).then(response => response.json());
};

// input: object (json)
// output: undefined
// eslint-disable-next-line camelcase
const renderFunc = ({ avatar_url, name, location }) => {
  imgElem.setAttribute('src', avatar_url);
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : null;
};

// input: nothing
// output: promise
const requestUser = () => {
  const userName = inputElem.value;
  requestFunc(userName).then(userData => renderFunc(userData));
};

btnElem.addEventListener('click', requestUser);
