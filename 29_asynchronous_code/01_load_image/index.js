// input: string, callback
// output: undefined
export const addImage = (imgSrc, callback) => {
  const rootElem = document.querySelector('.page');
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  rootElem.append(imgElem);

  const imgLoadHandler = () => {
    // const { width, height } = imgElem;
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', imgLoadHandler);

  const errorHandler = () => {
    callback('Image load failed');
  };

  imgElem.addEventListener('error', errorHandler);
};

// callack function
// input: error || null, DOM element || nothing
// output: undefined
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
