let modalCount = [];
const defaultOptions = {
  hashHistory: true,
  preserve: true,
};

export default (Vue, opts) => {
  const subscription = new Vue();
  const options = Object.assign({}, defaultOptions, opts);

  function showStaticModal(name, params) {
    subscription.$emit('toggle', name, params)
  }

  function show(name, params) {
    if (!options.preserve && modalCount.length) {
      hide(modalCount[modalCount.length - 1])
    }

    modalCount.push(name);
    showStaticModal(name, { ...params, zIndex: modalCount.length})

    if (options.hashHistory) window.history.pushState('', '', `#${name}`);
  }

  function hide(name, params) {
    modalCount = modalCount.filter(modal => modal !== name);
    subscription.$emit('toggle', name, params)

    if (options.hashHistory) {
      if (modalCount.length) {
        window.history
          .pushState('', '', `#${modalCount[modalCount.length - 1]}`);
      } else {
        window.history.pushState('', '', ' ');
      }
    }
  }

  return {
    show,
    hide,
    subscription,
  };
};
