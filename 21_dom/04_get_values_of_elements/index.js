const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));

  console.dir(elementsArray);
  return elementsArray;
};

// test data
getItemsList();
getItemsArray();
