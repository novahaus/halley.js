function checkWebpSupport() {
  function WebpIsSupported(callback) {
    if (!window.createImageBitmap) {
      callback(false);
      return;
    }

    const webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';


    fetch(webpdata).then(response => response.blob()).then((blob) => {
      createImageBitmap(blob).then(() => {
        callback(true);
      }, () => {
        callback(false);
      });
    });
  }

  WebpIsSupported((isSupported) => {
    // console.log(isSupported);
    if (!isSupported) {
      document.body.classList.add('dont-support-webp');
    }
  });
}

export default {
  init: checkWebpSupport,
};