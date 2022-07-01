const checkElem = document.querySelector('.task-status');

const checkHandler = event => {
  console.log(event.target.checked);
};

checkElem.addEventListener('change', checkHandler);
