/**
 * @param {string} userId
 * @return {promise}
 */
// algo
// 1. create promise
// 2. create setTimeOut, delay 1000ms
// 3. call resolve func in setTimeOut, resolved object data
// 4. create setTimeOut, delay 500ms
// 5. call reject func in setTimeOut with text error
// 6. return promise
export const requestUserData = userId => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      });
    }, 1000);
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    }
  });
  console.log(promise);
  return promise;
};

// test data
// const testIserId = requestUserData('id-777');
// testIserId.then(data => console.log(data));

// const testError = requestUserData('broken');
// testError.then(data => console.log(data)).catch(error => console.log(error));
