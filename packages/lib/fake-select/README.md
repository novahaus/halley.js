# fake-select.js - A halley.js library

A simple way to implement fake-select

![](https://i.imgur.com/o84D54T.gif)

## How to use
### Single istance

```ES6
import fakeSelect from 'halley.js/packages/lib/fake-select';

fakeSelect('#my-fake-select'); // Here you can pass an element or a selector
```

### Multiple instances
```ES6
  import { init } from 'halley.js/packages/lib/fake-select';

  init('.my-fake-select'); // Here you can pass an selector or an array of elements
```

### CSS
you need to import module css
```SCSS
  @import 'node_modules/halley.js/packages/lib/fake-select/dist/fake-select.css';
```

### Options
You can customize the classes inserted in the component, the default already implements some basic classes.

```ES6

  init('.my-fake-selects', {  // Default config
    insertClasses: {
      holder: 'halley-fake-select',
      select: 'halley-fake-select_select',
      span: 'halley-fake-select_span',
    },
  })
```

### Methods
When you store in a variable, you have access to some methods and data:
```ES6
import fakeSelect from 'halley.js/packages/lib/fake-select';

const mySelect = fakeSelect('#my-fake-select');
```
  - `Config` - Obejct -Here you have configuration items used to create the instance.
  - `Elements` - Object -  Here you have the used elements.
  - `emitEvent` - Function - Here you have a function that issues the change event of select.

### HTML Markup
The module needs an HTML structure to work.

```html
  <div my-dropdown>
    <select data-fake-select>
      <option value=""></option>
      <option value="Lorem">Lorem</option>
      <option value="Ipsum">Ipsum</option>
    </select>
    <span data-fake-span>Select</span>
  </div>
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
