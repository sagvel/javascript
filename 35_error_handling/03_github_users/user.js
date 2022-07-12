const imgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

// eslint-disable-next-line camelcase
export const renderFunc = ({ avatar_url, name, location }) => {
  imgElem.setAttribute('src', avatar_url);
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : null;
};
