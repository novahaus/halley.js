# webp-detector.js - A halley.js library

A simple way to check if your browser has WebP format compatibility.

## How to use
By default it puts a class in the body when the browser does not use the format.
```ES6
import webpDetector from 'halley.js/packages/lib/webp-detector';

webpDetector(); //
```


## Options
You can pass a settings object

```ES6

  init({
    class: 'dont-support-webp',
    onSupported: Function, // callback when browser supports format
    onUnSupported: Function // ccallback when browser dont supports format
  })
```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
