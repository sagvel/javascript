const BASE_URL = 'https://api.github.com/users/';

export const requestFunc = userUrl => {
  return fetch(`${BASE_URL}${userUrl}`).then(response => {
    if (!response.ok) {
      throw new Error('Failed to load data');
    }
    return response.json();
  });
};

export const fetchRepos = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Failed to load data');
    }
    return response.json();
  });
};
