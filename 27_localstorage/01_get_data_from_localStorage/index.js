// test write data to localStorage
// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Berck' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

// input: nothing
// output: object
export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
}

// test data
// console.log(getLocalStorageData());
