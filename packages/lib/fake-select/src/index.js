import selector, { all } from '../../../utils/selector';

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

function makeDropdown(elm, opt) {
  const ctx = elm;
  const options = opt;
  const select = ctx.querySelector(options.selectors.select);
  const label = ctx.querySelector(options.selectors.span);
  const parentForm = ctx.closest('form');

  function changeInner() {
    label.innerHTML = select.options[select.selectedIndex].innerHTML;
  }

  function onChange() {
    changeInner();
  }

  function onReset() {
    setupFirst();
  }

  function setupListener() {
    if (parentForm) {
      parentForm.addEventListener('reset', onReset);
    }

    select.addEventListener('change', onChange);
  }

  function emitEvent() {
    select.dispatchEvent(new Event('change'));
  }

  function setupClasses() {
    ctx.classList.add(options.insertClasses.holder);
    select.classList.add(options.insertClasses.select);
    label.classList.add(options.insertClasses.span);
  }

  function setupFirst() {
    label.innerHTML = select.options[0].innerHTML;
  }

  function init() {
    setupListener();
    setupClasses();
    setupFirst();
  }

  init();

  return {
    elements: {
      holder: ctx,
      select,
      label,
    },
    emitEvent,
    config: options,
  }
}

export default (slc, opt) => {
  const elm = selector(slc);
  return makeDropdown(elm, Object.assign({}, defaultOptions, opt ));
};

export const init = (slc, opt) => {
  const data = all(slc);
  return data.map(elm => makeDropdown(elm, Object.assign({}, defaultOptions, opt )));
}