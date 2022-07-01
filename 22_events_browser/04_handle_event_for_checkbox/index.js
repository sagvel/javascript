const checkElem = document.querySelector('.task-status');

const checkHandler = () => {
  console.log(checkElem.checked);
};

checkElem.addEventListener('click', checkHandler);
