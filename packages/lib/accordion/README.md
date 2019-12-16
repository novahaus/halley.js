# accordion.js - A halley.js library

A simple way to implement accordion in your project.

![](https://i.imgur.com/LXIDyHZ.gif)

## Usage
### Single istance

```ES6
import accordion from 'halley.js/packages/lib/accordion';

accordion('#my-accordion'); // Here you can pass an element or a selector
```

### Multiple instances
```ES6
  import { init } from 'halley.js/packages/lib/accodions';

  init('.my-accodions'); // Here you can pass an selector or an array of elements
```

### CSS
you need to import module css
```SCSS
  @import 'node_modules/halley.js/packages/lib/accordion/dist/accordion.css';
```

### Options
You can pass a settings object, values ​​shown here are the defaults.

```ES6

  accordion('#my-accordion', {
    onClose: Function, // callback on close accordion item.
    onOpen: Function, // callback on open accordion item.
    toggleClick: true, // Closes the last opened item by opening another.
    activeClass: 'active' // class inserted in button when accordion item is open.
  })
```

### Properties
  - `elements` - Here you have the used elements.


### Methods
  - `open` - Method that opens accordion item, passing an index.
  - `close` - Method that closes accordion item, passing an index.
  - `getActive` - Method that returns the active item.


### Calbacks
These callbacks get an event as a parameter.

- `onOpen` - Function called when opening accordion item.
- `onClose` - Function called when closing accordion item.

### HTML Markup
The module needs an HTML structure to work, following this structure is essential for the module to work perfectly.

```html
  <div my-accordion>
    <div halley-accordion-item>
      <button halley-accordion-btn>Halley</button>
      <div halley-accordion-content> // This div needs only contain one child element
        <div>
          Accoordion item content
        </div>
      </div>
    </div>
  </div>
```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

MIT. © 2020 [NovaHaus](https://www.novahaus.com.br)
