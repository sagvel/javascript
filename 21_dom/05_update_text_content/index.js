// input: string
// output: undefined

export const setTitle = text => {
  document.querySelector('.title').textContent = text;
};

// test data

// console.log(document.querySelector('.title').textContent);
// setTitle('Hello! This is test call');
// console.log(document.querySelector('.title').textContent);
