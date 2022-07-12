const BASE_URL = 'https://api.github.com/users/';

export const requestFunc = async userUrl => {
  const response = await fetch(`${BASE_URL}${userUrl}`);

  if (!response.ok) {
    throw new Error('Failed to load data');
  }

  const usersData = await response.json();
  return usersData;
};

export const fetchRepos = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to load data');
  }

  const reposData = await response.json();
  return reposData;
};
