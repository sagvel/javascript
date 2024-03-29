const emailElem = document.querySelector('#email');
const passElem = document.querySelector('input[name=password]');
const nameElem = document.querySelector('input[name=name]');
const submitBtn = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');
const BASE_URL = 'https://62cbcd06a0800529309ee109.mockapi.io/api/v1/users';

const formHandler = event => {
  event.preventDefault();

  const formFields = [...new FormData(formElem)];
  const formData = formFields.reduce(function (acc, formField) {
    const [prop, value] = formField;

    return {
      ...acc,
      [prop]: value,
    };
  }, {});

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(() => {
      formElem.reset();
      return fetch(BASE_URL);
    })
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data)));

  submitBtn.disabled = true;
};

const changeFormHandler = () => {
  const isValidForm = formElem.reportValidity();
  submitBtn.disabled = !isValidForm;
};

formElem.addEventListener('input', changeFormHandler);
formElem.addEventListener('submit', formHandler);
