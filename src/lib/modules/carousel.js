import Flickity from 'flickity';

function makeCarousel(selector, opt) {
  const elm = (typeof selector === 'string') ? document.querySelector(selector) : selector;

  function init() {
    const carousel = new Flickity(elm, opt);
  }

  init();
}

function makeManyCarousel(selector, opt) {
  const elms = Array.from(document.querySelectorAll(selector));
  const instances = [];

  function init() {
    elms.forEach(elm => {
      instances.push(new Flickity(elm, opt));
    })
  }

  init();
}

export default {
  init: makeCarousel,
  initMany: makeManyCarousel,
}