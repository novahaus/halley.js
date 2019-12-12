const defaultOptions = {
  selectors: {
    button: '[halley-dropdown-button]',
    list: '[halley-dropdown-list]',
  },
  insertClasses: {
    activeButton: 'active',
  },
}

function dropdown(el, opt) {
  const options = opt;
  const elm = el;
  const button = elm.querySelector(options.selectors.button);
  const list = elm.querySelector(options.selectors.list);
  let isOpened = false;


  function open() {
    const { offsetHeight } = list.firstElementChild;
    list.style.maxHeight = `${offsetHeight}px`;
    button.classList.add(options.insertClasses.activeButton);

    isOpened = !isOpened;
    if (options.onOpen) options.onOpen();
  }

  function close() {
    list.style.maxHeight = 0;
    button.classList.remove(options.insertClasses.activeButton);

    isOpened = !isOpened;
    if (options.onClose) options.onClose();
  }

  function toggle() {
    if (!isOpened) open();
    else close();
  }

  function setupListener() {
    button.addEventListener('click', toggle);
  }

  function setupClasses() {
    elm.classList.add('halley-dropdown');
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
      holder: elm,
      button,
      list,
    },
  }
}

export default (selector, opt) => {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;
  return dropdown(elm, Object.assign({}, defaultOptions, opt));
}

export const init = (selector, opt) => {
  const data = (typeof selector === 'object') ? selector : Array.from(document.querySelectorAll(selector))
  return data.map(elm => dropdown(elm, Object.assign({}, defaultOptions, opt)));
}