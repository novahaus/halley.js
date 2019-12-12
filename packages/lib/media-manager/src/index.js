function init(bks) {
  const medias = bks.sort((a,b) =>  a.value - b.value);
  let media = dispatchEvent(window.innerWidth);
  let timer = null;

  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      media = dispatchEvent(window.innerWidth);
      window.dispatchEvent(new CustomEvent('CHANGE_MEDIA', { detail: media }));

    }, 300)
  });

  function dispatchEvent(media) {
    return medias.find(el => media <= el.value);
  }

  return {
    medias,
    getMedia: () => media,
  }
}

export default bks => init(bks);