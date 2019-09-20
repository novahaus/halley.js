import dialog from './dialog';
import video from './video';

// let optin = {
//   openButton: selector : Element,
//   video: {
//     elm: selector : Element,
//     options: {}
//   },
//   modal: {
//     elm: selector : Element,
//     options: {}
//   }
// }

function makeVideoModal(opt) {
  const openButton = (typeof opt.openButton === 'string') ? document.querySelector(opt.openButton) : opt.openButton;
  const video = video.init(opt.video.elm, opt.video.options);
  const modal = dialog.init(opt.modal.elm, {
    onOpen: video.open,
    onClose: video.close,
  });

  function setupListener() {
    openButton.addEventListener('click', modal.open);
  }

  function init() {
    setupListener();
  }

  init();

  return {
    open: modal.open,
    close: modal.close,
  }
}

export default {
  init: makeVideoModal,
}