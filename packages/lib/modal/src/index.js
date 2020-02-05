import selector, { all } from '../../../utils/selector';

const modalCount = [];
let lastOpen = null;

const defaultOptions = {
  hashHistory: true,
  disableScroll: true,
  disableEvents: false,
};

function modal(elm, opts) {
  const ctx = elm;
  const nameModal = ctx.getAttribute('id');
  const closebutton = Array.from(ctx.querySelectorAll('[halley-modal-close]'));
  const openButtons = Array.from(document.querySelectorAll(`[href="#${nameModal}"]`));
  const options = Object.assign({}, defaultOptions, opts);
  const structureData = { elm: ctx, nameModal, toggleModal, open, close };
  let scrollHeight = 0;

  function open(event) {
    if (event && options.disableEvents) event.preventDefault();
    ctx.classList.add('active');
    modalCount.push(nameModal);
    openButtons.forEach((btn) => btn.classList.add('active'));

    if (options.disableScroll) document.body.classList.add('no-scroll');
    if (options.hashHistory) window.location.hash = `#${nameModal}`;
    if (options.onOpen) options.onOpen.call(ctx, event);
    if (!options.preserve && lastOpen) {
      lastOpen.close();
    }

    lastOpen = structureData;
  }

  function close(event) {
    if (event && options.disableEvents) event.preventDefault();
    ctx.classList.remove('active');
    modalCount.pop();

    if (modalCount.length === 0) {
      window.location.hash = '';
      if (options.disableScroll) document.body.classList.remove('no-scroll');
    } else if (options.hashHistory) {
      window.location.hash = `#${modalCount[modalCount.length - 1]}`;
    }

    openButtons.forEach((btn) => btn.classList.remove('active'));

    if (options.onClose) options.onClose.call(ctx, event);
    if (!options.preserve) lastOpen = null;
  }

  function toggleModal(event) {
    if (event && options.disableEvents) event.preventDefault();

    if (ctx.classList.contains('active')) {
      close(event);
      window.scrollBy(0, scrollHeight);
      scrollHeight = 0;
    } else {
      scrollHeight = window.scrollY;
      open(event);
    }
  }

  function setupListeners() {
    openButtons.forEach((btn) => btn.addEventListener('click', toggleModal));
    closebutton.forEach((btn) => btn.addEventListener('click', close));
  }

  function init() {
    setupListeners();

    if (window.location.hash === `#${nameModal}`) {
      open();
      if (options.onStartOpen) options.onStartOpen.call(ctx, event);
    }
  }

  init();

  return structureData;
}

export default (slc, opt) => {
  const elm = selector(slc);
  return modal(elm, opt);
}

export const init = (slc, opt) => {
  const data = all(slc);
  return data.map(elm => modal(elm, opt));
}