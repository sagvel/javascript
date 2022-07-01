const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const btnAddHandlers = document.querySelector('.attach-handlers-btn');
const btnRemoveHendlers = document.querySelector('.remove-handlers-btn');
const btnClear = document.querySelector('.clear-btn');

const logTarget = (text, color) => {
  const rootElem = document.querySelector('.events-list');

  rootElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = () => logTarget('DIV', 'green');
const logGreenP = () => logTarget('P', 'green');
const logGreenSpan = () => logTarget('SPAN', 'green');
const logGreyDiv = () => logTarget('DIV', 'grey');
const logGreyP = () => logTarget('P', 'grey');
const logGreySpan = () => logTarget('SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const removeHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

const addHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

const clearData = () => {
  const rootElem = document.querySelector('.events-list');
  rootElem.innerHTML = '';
};

btnAddHandlers.addEventListener('click', addHandlers);
btnRemoveHendlers.addEventListener('click', removeHandlers);
btnClear.addEventListener('click', clearData);
