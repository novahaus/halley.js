# subpub.js

subpub.js is a topic-based publish/subscribe library written in JavaScript.

## Features

[✔] Dependency free<br />

## Example
```ES6
  import subpub from 'halley.js/packages/lib/subpub';

  const mySubscriber = (msg) => console.log(msg);

  subpub.subscribe('foo', mySubscriber);
  subpub.publish('foo', 'Hello world!!!');
```
### Get Subscriptions

```javascript
subpub.getSubscriptions('token');
// subscriptions by token from all topics
```

### Clear subscriptions

```javascript
subpub.clearSubscriptions();
// all subscriptions are removed
```


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
