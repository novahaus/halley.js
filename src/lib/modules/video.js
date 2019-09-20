import YtTracking from  './youtube-tracker';
import embedYouTubeApi from '../../utils/embed-youtube-api';

// let optin = {
//   automaticPlay: Boolean,
//   id: String,
//   onClose: Function,
//   onPlayVideo: Function,
//   onStateChange: Function,
//   playerVars: {},
//   onTracking: {
//     callback: Function,
//     trackings: ['10p']
//   }
// }

async function makeVideo(holder, opt) {
  const content = (typeof holder === 'string') ? document.querySelector(holder) : holder;
  const options = opt || {};
  let istanceVideo = null;
  let elm = null;

  function onStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      if (options.onStateChange) options.onStateChange();
    }

    if (options.onTracking) {
      event.target.tracking.onVideoStateChange(event.data);
    }
  }

  function playVideo(event) {
    const evt = event;

    if (options.onPlayVideo) options.onPlay();
    if (options.onTracking) {
      evt.target.tracking = new YtTracking(evt.target, {
        trackings: options.onTracking.trackings,
        callback: options.onTracking.callback,
      });
    }
  }

  function createVideo() {
    istanceVideo = new YT.Player(elm, {
      videoId: options.id,
      playerVars: options.playerVars,
      events: {
        onReady: event => playVideo(event),
        onStateChange: event => onStateChange(event)
      },
    })

    console.log(istanceVideo);
  }

  function close() {
    if (options.onClose) options.onClose();

    istanceVideo.stopVideo();
    istanceVideo.destroy();
    istanceVideo = null;
  }

  function play() {
    istanceVideo.playVideo();
  }

  function createElm() {
    content.innerHTML = '';
    elm = document.createElement('div');
    content.appendChild(elm);
  }

  function create() {
    createElm();
    createVideo();

    if (options.automaticPlay) play();
  }

  function init() {
    return new Promise((resolve, reject) => {
      embedYouTubeApi.init(create);
      resolve();
    })
  }

  await init();

  return {
    istanceVideo,
    create,
    play,
    close,
  };

}

export default {
  init: makeVideo
}