const btnElems = document.querySelectorAll('.pagination__page');

const haddleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

btnElems.forEach(btnElem => {
  btnElem.addEventListener('click', haddleClick);
});
