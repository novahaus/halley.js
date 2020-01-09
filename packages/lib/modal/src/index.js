import selector, { all } from '../../../utils/selector';

let modalCount = [];

const defaultOptions = {}

function modal(elm, opts) {
  const ctx = elm;
  const nameModal = ctx.getAttribute('id');
  const closebutton = Array.from(ctx.querySelectorAll('[halley-modal-close]'));
  const openButtons = Array.from(document.querySelectorAll(`[href="#${nameModal}"]`));
  const options = Object.assign({}, defaultOptions, opts);
  let scrollHeight = 0;

  function open(event) {
    ctx.classList.add('active');
    document.body.classList.add('no-scroll');
    modalCount.push(nameModal);
    window.location.hash = `#${nameModal}`;


    if (options.onOpen) options.onOpen.call(ctx, event);
  }

  function close(event) {
    ctx.classList.remove('active');
    modalCount.pop();
    window.location.hash = '';

    if (modalCount.length === 0) {
      document.body.classList.remove('no-scroll');
    } else {
      window.location.hash = `#${modalCount[modalCount.length - 1]}`;
    }

    if (options.onClose) options.onClose.call(ctx, event);
  }

  function toggleModal(e) {
    if (e) e.preventDefault();

    if (ctx.classList.contains('active')) {
      close(e);
      window.scrollBy(0, scrollHeight);
      scrollHeight = 0;
    } else {
      scrollHeight = window.scrollY;
      open(e);
    }
  }

  function setupListeners() {
    openButtons.forEach(btn => btn.addEventListener('click', toggleModal));
    closebutton.forEach(btn => btn.addEventListener('click', close));
  }

  function init() {
    setupListeners();

    if (window.location.hash == `#${nameModal}`) {
      open();
      if (options.onStartOpen) options.onStartOpen.call(ctx, event);
    }
  }

  init();

  return {
    elm: ctx,
    toggleModal,
    open,
    close,
  }
}

export default (slc, opt) => {
  const elm = selector(slc);
  return modal(elm, opt);
}

export const init = (slc, opt) => {
  const data = all(slc);
  return data.map(elm => modal(elm, opt));
}