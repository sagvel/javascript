const counterElem = document.querySelector('.counter');
const valueElem = document.querySelector('.counter__value');

// input: event object
// output: undefined
const counterElemHandler = event => {
  const isButton = event.target.classList.contains('counter__btn');

  if (!isButton) {
    return;
  }

  const useAction = event.target.dataset.action;
  const currentValue = Number(valueElem.textContent);

  const newValue = useAction === 'decrease' ? currentValue - 1 : currentValue + 1;

  localStorage.setItem('counter', newValue);

  valueElem.textContent = newValue;
};

// input: event object
// output: undefined
const storageHandler = event => {
  valueElem.textContent = event.newValue;
};

// input: nothing
// output: undefined
const documentHandler = () => {
  valueElem.textContent = localStorage.getItem('counter') || 0;
};

counterElem.addEventListener('click', counterElemHandler);
window.addEventListener('storage', storageHandler);
document.addEventListener('DOMContentLoaded', documentHandler);
