const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];
// input: number, number
// output: number
const getRandomNumbers = (from, to) => from + Math.random() * (to - from);

// input: string
// output: promise
const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumbers(1, 3);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

// input: string
// output: promise
export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));
