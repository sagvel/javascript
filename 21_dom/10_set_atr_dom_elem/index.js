// input: undefined
// output: undefined

export const finishForm = () => {
  const rootElem = document.querySelector('.login-form');
  const passElem = document.querySelector('[name=password]');
  const inputElem = document.createElement('input');

  passElem.setAttribute('type', 'password');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');

  rootElem.prepend(inputElem);
};

// test data
// finishForm();
