const btnElem = document.querySelector('.single-use-btn');

const btnHandler = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', btnHandler);
};

btnElem.addEventListener('click', btnHandler);
