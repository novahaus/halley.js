# Halley.js

## List of components

### carousel
```ES6
import { carousel } from 'halley.js/lib';

carousel.init(selector, options) // initialize a instance
carousel.initMany(selector, options) // initializes multiple instances
```

### webp-detector
```ES6
import { webpDetector } from 'halley.js/lib'

webpDetector.init();
```

### dialog
```ES6
import { dialog } from 'halley.js/lib';

dialog.init(selector, { // selector accept element or selector
  onOpen: // callback on open modal
  onClose: // callback on close modal
});

dialog.open(); // Open modal
dialog.close(); // Close modal
```

### video
```ES6
import { video } from 'halley.js/lib';

video.init(holder, { // where will be created iframe
  automaticPlay: Boolean // default: false
  id: '' // Id of the video
  onPlay: Function // callback on play video
  onClose: Function // callback on close video
  onStateChange: Function // callback on state change video
  playerVars: {} // object config of the YT.player instance
  onTracking: {
    callback: Function, // callback on tracking video, by default receive event as parameter
    tracking: [] // value default ['0%', '25%', '50%', '75%', '100%'] , accept suffix 'p' for percentage, 's' for seconds
  }
});
```