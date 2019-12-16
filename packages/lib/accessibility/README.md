# accssebility.js - A halley.js library

This module easily and simply implements accessibility actions such as increasing font and contrast.

## How to use
```ES6
import accessibility from 'halley.js/packages/lib/accessibility';

accessibility();
```


## Options
You can pass a settings object

```ES6
  accessibility({
    increaseFont: true, // Enables font size increment mode
    contrast: true, // Enables you to contrast
  })
```

### HTML Markup
The module needs an HTML structure to work.

```html
  <button halley-increase-font> + </button>
  <button halley-decrease-font> - </button>
  <button halley-contrast>contrast</button>

```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)