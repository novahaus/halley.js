# modal.js - A halley.js library

A simple way to implement modal in your project, you make the template.

![](https://i.imgur.com/Tci3sh7.gif)

## Usage
### Single istance

```ES6
import modal from 'halley.js/packages/lib/modal';

modal('#my-modal'); // Here you can pass an element or a selector
```

### Multiple instances
```ES6
  import { init } from 'halley.js/packages/lib/modal';

  init('.my-modals'); // Here you can pass an selector or an array of elements
```

### CSS
you need to import module css
```SCSS
  @import 'node_modules/halley.js/packages/lib/modal/dist/modal.css';
```

### Options
You can pass a settings object

```ES6

  init('.my-modals', {
    onClose: Function, // callback on close modal
    onOpen: Function // callback on open modal
  })
```

### Properties
  - `elm` - Here you have the holder element.


### Methods
  - `open` - Method that opens modal
  - `close` - Method that closes modal


### Calbacks
These callbacks get an event as a parameter.

- onOpen - Function called when opening modal
- onClose - Function called when closing modal

### HTML Markup
The module needs an HTML structure to work.

```html
  <div class="halley_modal" halley-modal id="my-modal">
    <div class="halley_modal_overlay" halley-modal-close></div>

    // Here you include your template

  </div>

  <a href="#my-modal">Open modal</a> // Pointing a link to modal, on click the modal will open
```

Putting one or several buttons with the mark, in click the modal will be closed:
```html
  <div class="halley_modal" halley-modal id="my-modal">
    <div class="halley_modal_overlay" halley-modal-close></div>

      <button halley-modal-close>Close modal</button>

  </div>
```

#### Example
```html
  <div class="halley_modal" halley-modal id="my-modal">
    <div class="halley_modal_overlay" halley-modal-close></div>
    <div class="modal">
      <button halley-modal-close>Close modal</button>
      <p>Hello modal</p>
    </div>
  </div>

  <a href="#my-modal">Open modal</a>
```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
