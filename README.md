# Halley

## List of components

### carousel
```ES6
import { carousel } from 'halley/lib';

carousel.init(selector, options) // initialize a instance
carousel.initMany(selector, options) // initializes multiple instances
```

### webp-detector
```ES6
import { webpDetector } from 'halley/lib'

webpDetector.init();
```

### dialog
```ES6
import { dialog } from 'halley/lib';

dialog.init(selector, { // selector accept element or selector
  onOpen: // callback on open modal
  onClose: // callback on close modal
});

dialog.open(); // Open modal
dialog.close(); // Close modal
```