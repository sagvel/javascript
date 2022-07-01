const inputElem = document.querySelector('.text-input');

const inputHandler = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', inputHandler);
