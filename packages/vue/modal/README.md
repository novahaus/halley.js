# VModal

A simple way to implement modal in your project, you make the template.

<!-- ## Features -->

<!-- [✔] Closing modal on overlay click<br /> -->
<!-- [✔] Closing modal on esc button press<br /> -->
<!-- [✔] Toggling aria-hidden attribute on modal<br /> -->
<!-- [✔] Trapping tab focus within the modal<br /> -->

## Configuration

```JS
import VModal from 'halley.js/packages/vue/modal';

Vue.use(VModal, { ... })
```

### Options
You can pass a settings object

```JS

  Vue.use(VModal, {
    hashHistory: Boolean, // enable/disable hash in modal navigation
    preserve: Boolean, // preserves modals opened before the current
  })
```

### CSS
you need to import module css
<br /><br />

####  - Preprocessor
```SCSS
  @import 'node_modules/halley.js/packages/vue/modal/dist/modal.css';
```

#### - JavaScript
```JS
  import 'node_modules/halley.js/packages/vue/modal/dist/modal.css';
```


### API
Plugin API can be called within any component through this.$modal.<br />
In the methods below, you can pass an object as a parameter, which can be accessed in the component to be opened

  - `show` - Method that opens modal
  - `hide` - Method that closes modal

<br />

```html
  <template>
    <modal name="example">This is an example</modal>
  </template>

  <script>
  export default {
    name: 'MyComponent',
    mounted () {
      this.$modal.show('example', { ... })
    }
  }
  </script>
```

### Events
All events receive an object with component information and parameters passed in the API call
  - `open` - Emits after modal became visible
  - `close` - Emits after the modal is no longer visible

```html
  <template>
    <modal @open="onOpen" name="example">This is an example</modal>
  </template>

  <script>
  export default {
    name: 'MyComponent',
    methods: {
      onOpen(event) {
        console.log(event);
      },
    },
  };
  </script>
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
