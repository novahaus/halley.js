import selector, { all } from '../../../utils/selector';

const modalCount = [];
const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
let lastOpen = null;

const defaultOptions = {
  hashHistory: true,
  disableScroll: true,
  disableEvents: true,
};

function modal(elm, opts) {
  const ctx = elm;
  const nameModal = ctx.getAttribute('id');
  const closebutton = Array.from(ctx.querySelectorAll('[halley-modal-close]'));
  const openButtons = Array.from(document.querySelectorAll(`[href="#${nameModal}"]`));
  const focusableElements = Array.from(ctx.querySelectorAll(focusableElementsString));
  const options = Object.assign({}, defaultOptions, opts);
  const structureData = { elm: ctx, nameModal, toggleModal, open, close };
  const tabStop = { first: focusableElements[0], last: focusableElements[focusableElements.length - 1] };
  let scrollHeight = 0;

  function changeTabIndex(i) {
    focusableElements.forEach((focus) => focus.setAttribute('tabindex', i));
  }

  function setupTabFocus() {
    ctx.addEventListener('keydown', trapTabKey);
  }

  function trapTabKey(event) {
    if (event.keyCode === 27) close();
    if (event.keyCode === 9) {
      if ((event.shiftKey) && (document.activeElement === tabStop.first)) {
        event.preventDefault();
        tabStop.last.focus();
      } else if (document.activeElement === tabStop.last) {
        event.preventDefault();
        tabStop.first.focus();
      }
    }
  }

  function open(event) {
    if (event && options.disableEvents) event.preventDefault();
    ctx.setAttribute('aria-hidden', false);
    changeTabIndex(0);
    ctx.classList.add('active');
    modalCount.push(nameModal);
    openButtons.forEach((btn) => btn.classList.add('active'));

    if (options.disableScroll) document.documentElement.classList.add('no-scroll');
    if (options.onOpen) options.onOpen.call(ctx, event);
    if (options.hashHistory) window.location.hash = `#${nameModal}`;
    if (!options.preserve && lastOpen) {
      lastOpen.close();
    }

    setupTabFocus();
    lastOpen = structureData;
  }

  function close(event) {
    if (event && options.disableEvents) event.preventDefault();
    ctx.setAttribute('aria-hidden', true);
    changeTabIndex(-1);
    ctx.classList.remove('active');
    modalCount.pop();

    if (modalCount.length === 0) {
      window.location.hash = '';
      if (options.disableScroll) document.documentElement.classList.remove('no-scroll');
    } else if (options.hashHistory) {
      window.location.hash = `#${modalCount[modalCount.length - 1]}`;
    }

    openButtons.forEach((btn) => btn.classList.remove('active'));

    if (options.onClose) options.onClose.call(ctx, event);
    if (!options.preserve) lastOpen = null;
  }

  function toggleModal(event) {
    event.preventDefault();

    if (ctx.classList.contains('active')) {
      close(event);
      setTimeout(() => {
        window.scrollBy(0, scrollHeight)
        scrollHeight = 0;
      }, 1)
    } else {
      open(event);
      scrollHeight = window.scrollY;
    }
  }

  function setupAccessibility() {
    ctx.setAttribute('aria-hidden', true);
    closebutton.forEach((bt) => bt.setAttribute('aria-label', 'Fechar'));
    changeTabIndex(-1);
  }

  function setupListeners() {
    openButtons.forEach((btn) => btn.addEventListener('click', toggleModal));
    closebutton.forEach((btn) => btn.addEventListener('click', close));
  }

  function init() {
    setupListeners();
    setupAccessibility();

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