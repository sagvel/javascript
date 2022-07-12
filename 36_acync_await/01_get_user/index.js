// input: string
// output: data || null

const BASE_URL = 'https://api.github.com/users';
export const fetchUser = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};

// test data

// fetchUser('facebook').then(data => console.log(data));
