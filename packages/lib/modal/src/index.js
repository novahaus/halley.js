let modalCount = [];

const defaultOptions = {}

function modal(el, opts) {
  const elm = el;
  const nameModal = elm.getAttribute('id');
  const closebutton = Array.from(elm.querySelectorAll('[data-modal-close]'));
  const openButtons = Array.from(document.querySelectorAll(`[href="#${nameModal}"]`));
  const options = Object.assign({}, defaultOptions, opts);
  let scrollHeight = 0;

  function open() {
    elm.classList.add('active');
    document.body.classList.add('no-scroll');
    modalCount.push(nameModal);
    window.location.hash = `#${nameModal}`;


    if (options.onOpen) options.onOpen();
  }

  function close() {
    elm.classList.remove('active');
    modalCount.pop();
    window.location.hash = '';

    if (modalCount.length === 0) {
      document.body.classList.remove('no-scroll');
    } else {
      window.location.hash = `#${modalCount[modalCount.length - 1]}`;
    }

    if (options.onClose) options.onClose();
  }

  function toggleModal(e) {
    if (e) e.preventDefault();

    if (elm.classList.contains('active')) {
      close();
      window.scrollBy(0, scrollHeight);
      scrollHeight = 0;
    } else {
      scrollHeight = window.scrollY;
      open();
    }
  }

  function setupListeners() {
    openButtons.forEach(btn => btn.addEventListener('click', toggleModal));
    closebutton.forEach(btn => btn.addEventListener('click', close));
  }

  function init() {
    setupListeners();

    if (window.location.hash == `#${nameModal}`) open();
  }

  init();

  return {
    elm,
    toggleModal,
    open,
    close,
  }
}

export default (selector, opt) => {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;
  return modal(elm, opt);
}

export const init = (selector, opt) => {
  const data = (typeof selector === 'object') ? selector : Array.from(document.querySelectorAll(selector))
  return data.map(elm => modal(elm, opt));
}