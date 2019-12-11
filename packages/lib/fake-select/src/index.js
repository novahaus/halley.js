const defaultOptions = {
  insertClasses: {
    holder: 'halley-fake-select',
    select: 'halley-fake-select_select',
    span: 'halley-fake-select_span',
  },
  selectors: {
    select: '[data-fake-select]',
    span: '[data-fake-span]',
  },
}

function makeDropdown(el, opt) {
  const elm = el
  const options = opt;
  const select = elm.querySelector(options.selectors.select);
  const label = elm.querySelector(options.selectors.span);


  function setupListener() {
    select.addEventListener('change', () => {
      label.innerHTML = select.options[select.selectedIndex].innerHTML;
    });
  }

  function emitEvent() {
    select.dispatchEvent(new Event('change'));
  }

  function setupClasses() {
    elm.classList.add(options.insertClasses.holder);
    select.classList.add(options.insertClasses.select);
    label.classList.add(options.insertClasses.span);
  }

  function init() {
    setupListener();
    setupClasses();
  }

  init();

  return {
    elements: {
      holder: elm,
      select,
      label,
    },
    emitEvent,
    config: options,
  }
}

export default (selector, opt) => {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;
  return makeDropdown(elm, Object.assign({}, defaultOptions, opt ));
};

export const init = (selector, opt) => {
  const data = (typeof selector === 'object') ? selector : Array.from(document.querySelectorAll(selector));
  return data.map(elm => makeDropdown(elm, Object.assign({}, defaultOptions, opt )));
}