const BASE_URL = 'https://api.github.com/repos/USERID/REPOID/commits?per_page=100';

const getMostActiveDevs = () => {
  return fetch(BASE_URL).then(res => {
    if (!res.ok) {
      throw new Error('Cant load data');
    } else {
      return res.json();
    }
  });
};

getMostActiveDevs().then(res => {
  console.log(res);
});
