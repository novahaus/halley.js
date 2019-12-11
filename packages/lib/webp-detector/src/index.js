const defaultOptions = {
  class: 'dont-support-webp',
}

function checkWebpSupport(opt) {
  const options = opt;

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
    if (!isSupported) {
      document.body.classList.add(options.class);
      if (options.onUnsupported) options.onUnsupported();
    } else {
      if (options.onSupported) options.onSupported();
    }
  });
}

export default options => checkWebpSupport(Object.assign({}, defaultOptions, options))