import selector from '../../../utils/selector';

const pathRegex = /([^#])+#/g;
const defaultOptions = {
  offset: 0,
  activeClass: '-active',
  selector: 'a',
};

const getScrollPosition = () => (document.documentElement.scrollTop || document.body.scrollTop);

function scrollSpy(elm, opt) {
  const ctx = elm;
  const options = Object.assign({}, defaultOptions, opt);
  const data = Array.from(ctx.querySelectorAll(options.selector))
    .map(link => ({
      link,
      section: document.querySelector(link.getAttribute('href').replace(pathRegex, '#')) || null,
    }))
    .filter(item => item.section);
  let lastActive = data[0];
  let scrollPosition = getScrollPosition();
  let timer = null;

  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-05-04 17:19:10
   * @Desc: activate item
   */
  function activateItem(item) {
    lastActive.link.classList.remove(options.activeClass);
    item.link.classList.add(options.activeClass);
    lastActive = item;
  }

  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-04-29 15:26:40
   * @Desc: destroy the instance
   */
  function destroy() {
    window.removeEventListener('scroll', onScroll);
  }


  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-04-29 15:19:33
   * @Desc: checks which item should be activated and activates it
   */
  function checkToActivate() {
    data.forEach(item => {
      if (item.section.offsetTop <= (scrollPosition + options.offset)) {
        activateItem(item);
        if (options.callback) options.callback(item, data);
      }
    })
  }

  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-04-29 15:20:30
   * @Desc: callback on scroll page
   */
  function onScroll() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollPosition = getScrollPosition();
      checkToActivate();
    }, 100)
  }

  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-04-29 15:20:48
   * @Desc: start listener of page
   */
  function setupListener() {
    window.addEventListener('scroll', onScroll);
  }

  /**
   * javascript comment
   * @Author: Leandro C. Silva
   * @Date: 2020-04-29 15:21:26
   * @Desc: starts scrollSpy
   */
  function init() {
    setupListener();
    checkToActivate();
  }

  init();

  return {
    ctx,
    options,
    destroy,
    init,
    getActive: () => lastActive,
  }
}

export default (slc, opt) => {
  const elm = selector(slc);
  return scrollSpy(elm, opt);
};
