# scrollSpy.js - A simple vanilla JS scrollspy script.

![](https://i.imgur.com/tSQh0W7.gif)

## Usage

```ES6
import scrollSpy from 'halley.js/packages/lib/scrollSpy';

scrollSpy('[my-navbar]'); // Here you can pass an element or a selector where the anchors are.
```

### Options
You can pass a settings object

```ES6

  scrollSpy('[my-navbar]', {
    offset: Number // Value in pixels,
    callback: Function
  })
```

### Properties
  - `ctx` - Here you have the holder element.
  - `options` - Here you have the used options.


### Methods
  - `destroy` - Destroy the instance
  - `init` - Starts instance again
  - `getActive` - Method that returns active item.


### Callback

This callback is called when an item is activated, taking the active item as a parameter.

```ES6

  scrollSpy('[my-navbar]', {
    callback: (activeItem) => console.log(activeItem),
  })
```

#### Example
```html
  <nav data-navbar>
    <ul>
      <li><a href="#ennie">Ennie</a></li>
      <li><a href="#mennie">mennie</a></li>
      <li><a href="#mo">mo</a></li>
    </ul>
  </nav>

  <section id="ennie"></section>
  <section id="mennie"></section>
  <section id="mo"></section>
```

```ES6
  scrollSpy('[data-navbar]');
```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
