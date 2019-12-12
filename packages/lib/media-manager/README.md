# media-manager.js - A halley.js library

A simple way to implement a media-manager.

## How to use
You need to pass an array of objects, containing the desired breakpoints, an event in the window will fire when there is resize on the page, values ​​are in pixels.


Example:
```ES6
import mediaManager from 'halley.js/packages/lib/media-manager';

mediaManager([
  { name: 'MOBILE', value: 767 }, // values ​​are in pixels
  { name: 'DESKTOP', value: 1920 },
  { name: 'TABLET', value: 1150 },
]);

window.addEventListener('CHANGE_MEDIA', e => console.log(e))
```

### Properties
  - `medias` - Here you have medias used to create the instance.


### Methods
  - `getMedia` - Returns the current media.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
