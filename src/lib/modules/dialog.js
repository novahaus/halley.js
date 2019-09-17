function makeDialog(selector, opts) {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;
  const options = opts || {};
  const closeButton = elm.querySelector('[data-dialog-close]');

  function open() {
    document.body.style.overflow = 'hidden';
    elm.classList.remove('data-out');
    elm.classList.add('data-active');

    if (options.onOpen) options.onOpen();
  }

  function close() {
    document.body.style.overflow = '';

    elm.classList.remove('data-out');
    elm.classList.add('data-active');


    if (options.onClose) options.onClose();
  }

  function onCloseButtonClick() {
    close();
  }

  function setupListener() {
    if (closeButton) {
      closeButton.addEventListener('click', onCloseButtonClick);
    }
  }

  function init() {
    setupListener();
  }

  init();

  return {
    open,
    close,
  };
}


export default {
  init: makeDialog,
};