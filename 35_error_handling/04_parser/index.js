// input: string
// output: object || null
export const parseUser = data => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

// test data

// const jsonData = `{ "name": "John", "age": 30 }`;
// const res = parseUser(jsonData);
// console.log(res);

// const errorJson = `{ name": "John", "age": 30 }`;
// const resErroor = parseUser(errorJson);
// console.log(resErroor);
