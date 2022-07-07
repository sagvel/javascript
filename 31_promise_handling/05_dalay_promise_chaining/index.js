// input: number
// output: promise
export const delay = num => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, num);
  });

  return promise;
};

// test data
// delay(3000).then(() => console.log('Done'));
