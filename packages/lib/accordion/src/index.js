import selector, { all } from '../../../utils/selector';

const defaultOptions = {
  toggleClick: true,
  activeClass: 'active',
  listenerResize: true,
}

const makeStructure = arr => {
  const data = arr;
  return data.map((child, idx) => ({
    holder: child,
    button: child.querySelector('[halley-accordion-btn]'),
    content: child.querySelector('[halley-accordion-content]'),
    isOpened: false,
    index: idx,
  }))
}


function accordion(elm, opt) {
  const ctx = elm;
  const childs = Array.from(ctx.children);
  const options = Object.assign({}, defaultOptions, opt);
  const items = makeStructure(childs);
  let lastOpened = -1;
  let timer = null;

  function onScroll() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      resizeListener();
    }, 100)
  }

  function resizeListener() {
    if (lastOpened >= 0) {
      const { offsetHeight } = items[lastOpened].content.firstElementChild;
      items[lastOpened].content.style.maxHeight = `${offsetHeight}px`;
    }
  }

  function open(event, idx) {
    const { offsetHeight } = items[idx].content.firstElementChild;
    items[idx].content.style.maxHeight = `${offsetHeight}px`;
    items[idx].holder.classList.add(options.activeClass);
    items[idx].button.classList.add(options.activeClass);

    if (options.onOpen) options.onOpen.call(items[idx], event);
    if (lastOpened >= 0 && options.toggleClick) close(null, lastOpened);
    items[idx].isOpened = true;

    lastOpened = idx;
  }

  function close(event, idx) {
    items[idx].content.style.maxHeight = 0;
    items[idx].holder.classList.remove(options.activeClass);
    items[idx].button.classList.remove(options.activeClass);
    items[idx].isOpened = false;
    if (options.onClose) options.onClose.call(items[idx], event);

    lastOpened = -1;
  }

  function toggle(e, i) {
    if (!items[i].isOpened) open(e, i);
    else close(e, i);
  }

  function setupListeners() {
    if (options.listenerResize) {
      window.addEventListener('resize', onScroll);
    }

    items.forEach((item, index) =>
      item.button.addEventListener('click', (e) => toggle(e, index)));
  }

  function setupClasses() {
    items.forEach(item => {
      item.holder.classList.add('halley-accordion-item');
      item.content.classList.add('halley-accordion-content');
    })
  }

  function init() {
    setupListeners();
    setupClasses();
  }

  init();

  return {
    elements: items,
    getActive: () => items[lastOpened],
    open: idx => open(null, idx),
    close: idx => close(null, idx),
  }
}

export default (slc, opt) => {
  const elm = selector(slc);
  return accordion(elm, opt);
}

export const init = (slc, opt) => {
  const data = all(slc);
  return data.map(elm => accordion(elm, opt));
}