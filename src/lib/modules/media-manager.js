import pubsub from 'pubsub.js';

function init(bks) {
  var media = dispatchEvent(window.innerWidth);
  var timer = null;
  var medias = bks.sort((a,b) =>  a.value - b.value);

  window.addEventListener('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      media = dispatchEvent(window.innerWidth);
    }, 300)
  });

  function dispatchEvent(media) {
    pubsub.publish('CHANGE_MEDIA');
    return media.find(el => media <= el.value);
  }

  return {
    events: bks,
    medias: medias,
    getMedia: function getMedia() {
      return media;
    },
  }
}

export default {
  init
};