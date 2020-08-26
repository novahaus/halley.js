<template>
  <div
    ref="modal"
    v-if="visible"
    class="vue-modal"
    :style="{ 'z-index': zIndex }"
  >
    <transition :name="options.overlayTransition">
      <div
        v-if="visibility.overlay"
        class="vue-modal_overlay"
        @click="$modal.hide(name)"
      ></div>
    </transition>
    <transition :name="options.modalTransition">
      <div v-if="visibility.modal"  class="vue-modal_container">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
        Object.assign(this.params, params)
        this.toggle()
      }
    },
    toggle() {
      this[this.visible ? 'close' : 'open']()
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.startTransitionEnter();
        this.$emit('open', this.createModalEvent({
          state: 'opened',
        }));
      })

    },
    close() {
      this.startTransitionLeave();
      setTimeout(() => {
        this.visible = false;
      }, 300)

      this.$emit('close', this.createModalEvent({
        state: 'closed',
      }));
    },
    startTransitionEnter() {
      this.visibility.overlay = true
      this.visibility.modal = true
    },
    startTransitionLeave() {
      this.visibility.overlay = false
      this.visibility.modal = false
    },
    createModalEvent(properties = {}) {
      return {
        name: this.name,
        ref: this.$refs.modal || null,
        ...this.params,
        ...properties
      }
    },
  }
}
</script>

<style lang="stylus">
.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vue-modal_overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(#000000, .8);
  opacity: 1;
  transition: opacity .2s ease;
  z-index: -1;
}

.vue-modal_container {
  transition: transform .3s ease;
  transform: scale(1);
  opacity: 1;
}

.ts-overlay-enter,
.ts-overlay-leave-active {
  opacity: 0;
}

.ts-modal-enter,
.ts-modal-leave-active {
  transform: scale(0);
}
</style>