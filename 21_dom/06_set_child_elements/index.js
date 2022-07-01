// input: string
// output: undefined

export const setButton = string => {
  document.querySelector('body').innerHTML = string;
  // document.querySelector('body').textContent = string;
};

// test data
// setButton('<button>button text</button>');
