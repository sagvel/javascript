// input: string
// output: Promise
export const addImage = imgSrc => {
  const rootElem = document.querySelector('.page');

  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    rootElem.append(imgElem);

    const imgLoadHandler = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', imgLoadHandler);

    const errorHandler = () => {
      reject(new Error('Image load is failed...'));
    };

    imgElem.addEventListener('error', errorHandler);
  });

  return p;
};

// examples
// const loadImg = addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
// );

// const renderParams = data => {
//   const spanElem = document.querySelector('.image-size');
//   spanElem.textContent = `${data.width} x ${data.height}`;
// };

// loadImg.then(renderParams);
