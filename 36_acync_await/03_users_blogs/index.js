/**
 * @param {string[]} users
 * @return {promise}
 */

const BASE_URL = 'https://api.github.com/users';
export const getUsersBlogs = async users => {
  try {
    const responses = await Promise.all(
      users.map(user => fetch(`${BASE_URL}/${user}`).then(response => response.json())),
    );

    const result = responses.map(user => user.blog);
    return result;
  } catch (error) {
    throw new Error("Can't load data");
  }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
