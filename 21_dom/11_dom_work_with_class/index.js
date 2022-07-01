// input: undefined
// output: undefined

export const manageClasses = () => {
  const listElemOne = document.querySelector('.one');
  const listElemTwo = document.querySelector('.two');
  const listElemThree = document.querySelector('.three');
  const listElemFour = document.querySelector('.four');

  listElemOne.classList.add('selected');
  listElemTwo.classList.remove('selected');
  listElemThree.classList.toggle('three_done');

  if (listElemFour.className.includes('some-class')) {
    listElemFour.classList.add('another-class');
  }
};

// test data
manageClasses();
