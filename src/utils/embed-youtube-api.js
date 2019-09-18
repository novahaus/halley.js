function embedApi() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export default {
  init(cb) {
    window.onYouTubeIframeAPIReady = () => cb();
    embedApi();
  },
};