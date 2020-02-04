# hamburger.js - A halley.js library

A simple way to implement menu hamburger in your project, you make the template.

<!-- ![](https://i.imgur.com/Tci3sh7.gif) -->

## Usage

### 1. STYLUS
you need to import module css
```STYLUS
  @import 'node_modules/halley.js/packages/lib/hamburger';
```

### 2. HTML Markup
Add the base hamburger markup:

```html
  <button class="hamburger" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
```

### 3. Choose style
Append the class name of the type of hamburger you’re craving:

```html
  <button class="hamburger hamburger--collapse" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
```

### 4. Customization
To override default settings, declare them before importing hamburger:

```STYLUS
$hamburger-padding-x = 20px;
$hamburger-padding-y = 15px;
$hamburger-types     = ( 'collapse' );

@import 'node_modules/halley.js/packages/lib/hamburger';
```

Here is the full list of default settings (found in node_modules/halley.js/packages/lib/hamburger/src/stylus/app.styl);

```STYLUS
$hamburger-padding-x            = 15px;
$hamburger-padding-y            = 15px;
$hamburger-layer-width          = 40px;
$hamburger-layer-height         = 4px;
$hamburger-layer-spacing        = 6px;
$hamburger-layer-color          = #000;
$hamburger-layer-border-radius  = 4px;
$hamburger-hover-opacity        = 0.7;
$hamburger-active-layer-color   = $hamburger-layer-color;
$hamburger-active-hover-opacity = $hamburger-hover-opacity;
$hamburger-hover-use-filter    = false;
$hamburger-hover-filter        = opacity(50%);
$hamburger-active-hover-filter = $hamburger-hover-filter;
$hamburger-active-class = '-active';

$hamburger-types = [
  3dx
  3dx-r
  3dy
  3dy-r
  3dxy
  3dxy-r
  arrow
  arrow-r
  arrowalt
  arrowalt-r
  arrowturn
  arrowturn-r
  boring
  collapse
  collapse-r
  elastic
  elastic-r
  emphatic
  emphatic-r
  minus
  slider
  slider-r
  spring
  spring-r
  stand
  stand-r
  spin
  spin-r
  squeeze
  vortex
  vortex-r
];
```



[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
