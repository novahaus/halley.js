import YtTracking from  './youtube-tracker';
import embedYouTubeApi from '../../utils/embed-youtube-api';

let optin = {
  automaticPlay: Boolean,
  id: String,
  onClick: Function,
  onClose: Function,
  onPlayVideo: Function,
  onStateChange: Function,
  playerVars: {},
  onTracking: {
    callback: Function,
    trackings: ['10p']
  }
}

function makeVideo(holder, opt) {
  const holder = (typeof holder === 'string') ? document.querySelector(holder) : holder;
  const options = opt;
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
    evt.target.playVideo();

    if (options.onPlayVideo) options.onPlayVideo();
    if (options.onTracking) {
      evt.target.tracking = new YtTracking(evt.target, {
        trackings: options.onTracking.trackings,
        callback: options.onTracking.callback,
      });
    }
  }

  function createVideo() {
    istanceVideo = new YT.Player(elm, {
      videoId: id,
      playerVars: options.playerVars,
      events: {
        onReady: event => playVideo(event),
        onStateChange: event => onStateChange(event)
      },
    })
  }

  function close() {
    if (options.onClose) options.onClose();

    istanceVideo.stopVideo();
    istanceVideo.destroy();
    istanceVideo = null;
  }

  function open() {
    createElm();
    createVideo();

    if (options.onClick) options.onClick();
  }

  function createElm() {
    holder.innerHTML = '';
    elm = document.createElement('div');
    holder.appendChild(elm);
  }

  function setup() {
    if (options.automaticPlay) openVideo();
  }

  function init() {
    embedYouTubeApi.init(setup);
  }

  init()

  return {
    open,
    close
  }
}

export default {
  init: makeVideo
}