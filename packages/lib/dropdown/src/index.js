import selector, { all } from '../../../utils/selector';

const defaultOptions = {
  selectors: {
    button: '[halley-dropdown-button]',
    list: '[halley-dropdown-list]',
  },
  activeClass: 'active',
}

function dropdown(el, opt) {
  const options = opt;
  const holder = el;
  const button = holder.querySelector(options.selectors.button);
  const list = holder.querySelector(options.selectors.list);
  let isOpened = false;


  function open(event) {
    const { offsetHeight } = list.firstElementChild;
    list.style.maxHeight = `${offsetHeight}px`;
    holder.classList.add(options.activeClass);

    isOpened = !isOpened;
    if (options.onOpen) options.onOpen.call(holder, event);
  }

  function close(event) {
    list.style.maxHeight = 0;
    holder.classList.remove(options.activeClass);

    isOpened = !isOpened;
    if (options.onClose) options.onClose.call(holder, event);
  }

  function toggle(e) {
    if (!isOpened) open(e);
    else close(e);
  }

  function setupListener() {
    button.addEventListener('click', toggle);
  }

  function setupClasses() {
    holder.classList.add('halley-dropdown');
    list.classList.add('halley-dropdown_hld');
  }

  function init() {
    setupListener();
    setupClasses();
  }

  init();

  return {
    options,
    open,
    close,
    toggle,
    elements: {
      holder,
      button,
      list,
    },
  }
}

export default (slc, opt) => {
  const elm = selector(slc);
  return dropdown(elm, Object.assign({}, defaultOptions, opt));
}

export const init = (slc, opt) => {
  const data = all(slc);
  return data.map(elm => dropdown(elm, Object.assign({}, defaultOptions, opt)));
}