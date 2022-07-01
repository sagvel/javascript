// input: undefined
// output: undefined

export const squaredNumbers = () => {
  const dataElems = document.querySelectorAll('.number');

  dataElems.forEach(currentElem => {
    const dataElem = currentElem;
    const dataElemAtr = dataElem.dataset.number ** 2;
    dataElem.dataset.squaredNumber = dataElemAtr;
  });
};

// test data
// squaredNumbers();
