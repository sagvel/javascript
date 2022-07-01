const inputElem = document.querySelector('.text-input');

const inputHandler = event => {
  console.log(event.target.value);
};

inputElem.addEventListener('change', inputHandler);
