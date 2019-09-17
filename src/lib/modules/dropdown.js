function makeDropdown() {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;
  const select = elm.querySelector('[data-dropdown-select]');
  const label = elm.querySelector('[data-dropdown-label]');


  function setupListener() {
    select.addEventListener('change', () => {
      label.innerHTML = select.options[select.selectedIndex].innerHTML;
    });
  }

  setupListener();
}

export default { init: makeDropdown };