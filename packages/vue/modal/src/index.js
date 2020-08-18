import modal from './components/modal.vue';
import DModal from './directives/modal';
import core from './core';

export default {
  install(Vue, options = {}) {
    if (Vue.prototype.$modal) {
      return
    }

    Vue.prototype.$modal = core(Vue, options)
    Vue.component(options.componentName || 'Modal', modal)
    Vue.directive('modal', DModal)
  },
};
