const emailElem = document.querySelector('#email');
const passElem = document.querySelector('#password');
const emailErrorMsg = document.querySelector('.error-text_email');
const emptyStrErrorMsg = document.querySelector('.error-text_password');
const submitBtn = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const isEmptyInput = value => (value.trim() ? undefined : 'Required');
const isEmail = value => (value.trim().includes('@') ? undefined : 'Should be an email');
const validatorsByField = {
  email: [isEmptyInput, isEmail],
  password: [isEmptyInput],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const emailHandler = event => {
  const errorMsg = validate('email', event.target.value);

  emailErrorMsg.textContent = errorMsg;
};

const passHandler = event => {
  const errorMsg = validate('password', event.target.value);

  emptyStrErrorMsg.textContent = errorMsg;
};

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
  alert(JSON.stringify(formData));
};

emailElem.addEventListener('input', emailHandler);
passElem.addEventListener('input', passHandler);
formElem.addEventListener('submit', formHandler);
