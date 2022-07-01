// input: number
// output: string

export const getSection = num => {
  const spanElem = document.querySelector(`span[data-number='${num}']`);

  return spanElem.closest('.box').dataset.section;
};

// test data
// getSection(4);
// getSection(3);
// getSection(1);
// getSection(6);
