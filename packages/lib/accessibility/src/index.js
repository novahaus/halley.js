const defaultOptions = {
  increaseFont: true,
  contrast: true,
}

export default function accessibility(opt) {
  const decreaseFont = document.querySelector('[halley-decrease-font]');
  const increaseFont = document.querySelector('[halley-increase-font]');
  const contrast = document.querySelector('[halley-contrast]');
  const options = Object.assign({}, defaultOptions, opt);

  function setupListeners() {
    if (options.increaseFont && decreaseFont && increaseFont) {
      increaseFont.addEventListener('click', increaseFonts);
      decreaseFont.addEventListener('click', decreaseFonts);
    }

    if (options.contrast && contrast) {
      contrast.addEventListener('click', grayscale);
    }
  }

  function increaseFonts() {
    document.documentElement.classList.add('increase-font');
    localStorage.setItem('increase-font', 'increase');
  }

  function decreaseFonts() {
    document.documentElement.classList.remove('increase-font');
    localStorage.setItem('increase-font', 'normal');
  }

  function grayscale() {
    document.documentElement.classList.toggle('accessibility-mode');
    if(document.documentElement.classList.contains('accessibility-mode')) {
      localStorage.setItem('accessibility-mode', 'accessibility');
    } else {
      localStorage.setItem('accessibility-mode', 'normal');
    }
  }

  function verifyLocalStorage() {
    if (localStorage.getItem('increase-font') === 'increase' && options.increaseFont) {
      document.documentElement.classList.add('increase-font');
    }

    if (localStorage.getItem('accessibility-mode') === 'accessibility' && options.contrast) {
      document.documentElement.classList.add('accessibility-mode');
    }
  }

  function init() {
    setupListeners();
    verifyLocalStorage();
  }

  init();
}