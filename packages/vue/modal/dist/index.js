(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory());
}(this, (function () { 'use strict';

  var modal = {
  render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('div',{ref:"modal",staticClass:"vue-modal",style:({ 'z-index': _vm.zIndex })},[_c('transition',{attrs:{"name":_vm.options.overlayTransition}},[(_vm.visibility.overlay)?_c('div',{staticClass:"vue-modal_overlay",on:{"click":function($event){return _vm.$modal.hide(_vm.name)}}}):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.options.modalTransition}},[(_vm.visibility.modal)?_c('div',{staticClass:"vue-modal_container"},[_vm._t("default")],2):_vm._e()])],1):_vm._e()},
  staticRenderFns: [],
    name: 'vue-modal',
    props: {
      name: {
        type: String,
        required: true,
      },
      options: {
        type: Object,
        default: () => ({
          overlayTransition: 'ts-overlay',
          modalTransition: 'ts-modal',
        })
      }
    },
    data() {
      return {
        visible: false,
        params: {
          zIndex: 1,
        },
        visibility: {
          modal: false,
          overlay: false
        },
      }
    },
    computed: {
      zIndex() {
        return this.params.zIndex + 100;
      }
    },
    beforeMount() {
      this.$modal.subscription.$on('toggle', this.onToggle);

      if (window.location.hash === `#${this.name}`) {
        this.$modal.show(this.name);
      }
    },
    methods: {
      onToggle(name, params) {
        if (this.name === name) {
          Object.assign(this.params, params);
          this.toggle();
        }
      },
      toggle() {
        this[this.visible ? 'close' : 'open']();
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {
          this.startTransitionEnter();
          this.$emit('open', this.createModalEvent({
            state: 'opened',
          }));
        });

      },
      close() {
        this.startTransitionLeave();
        setTimeout(() => {
          this.visible = false;
        }, 300);

        this.$emit('close', this.createModalEvent({
          state: 'closed',
        }));
      },
      startTransitionEnter() {
        this.visibility.overlay = true;
        this.visibility.modal = true;
      },
      startTransitionLeave() {
        this.visibility.overlay = false;
        this.visibility.modal = false;
      },
      createModalEvent(properties = {}) {
        return {
          name: this.name,
          ref: this.$refs.modal || null,
          ...properties
        }
      },
    }
  };

  var pathRegex = /([^#])+#/g;
  var DModal = {
    bind: function bind(el, binding, vnode) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var href = el.getAttribute('href');

        if (href) {
          vnode.context.$modal.show(href.replace(pathRegex, '').replace('#', ''));
        }
      });
    }
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var modalCount = [];
  var defaultOptions = {
    hashHistory: true,
    preserve: true
  };
  var core = (function (Vue, opts) {
    var subscription = new Vue();
    var options = Object.assign({}, defaultOptions, opts);

    function showStaticModal(name, params) {
      subscription.$emit('toggle', name, params);
    }

    function show(name, params) {
      if (!options.preserve && modalCount.length) {
        hide(modalCount[modalCount.length - 1]);
      }

      modalCount.push(name);
      showStaticModal(name, _objectSpread2(_objectSpread2({}, params), {}, {
        zIndex: modalCount.length
      }));
      if (options.hashHistory) window.history.pushState('', '', "#".concat(name));
    }

    function hide(name, params) {
      modalCount = modalCount.filter(function (modal) {
        return modal !== name;
      });
      subscription.$emit('toggle', name, params);

      if (options.hashHistory) {
        if (modalCount.length) {
          window.history.pushState('', '', "#".concat(modalCount[modalCount.length - 1]));
        } else {
          window.history.pushState('', '', ' ');
        }
      }
    }

    return {
      show: show,
      hide: hide,
      subscription: subscription
    };
  });

  var index = {
    install: function install(Vue) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Vue.prototype.$modal) {
        return;
      }

      Vue.prototype.$modal = core(Vue, options);
      Vue.component(options.componentName || 'Modal', modal);
      Vue.directive('modal', DModal);
    }
  };

  return index;

})));
