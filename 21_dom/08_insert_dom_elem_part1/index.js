// input: string
// output: undefined

export const createButton = string => {
  const buttonElem = document.createElement('button');

  buttonElem.textContent = string;
  document.querySelector('body').append(buttonElem);
};

// test data
// createButton('Some button');
