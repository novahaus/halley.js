import makeCarousel from './modules/carousel';
import makeWebpDetector from './modules/webp-detector';
import makeDialog from './modules/dialog';
import makeDropdown from './modules/dropdown';
import makeVideo from  './modules/video';

export const carousel = makeCarousel
export const webpDetector = makeWebpDetector;
export const dialog = makeDialog;
export const dropdown = makeDropdown;
export const video = makeVideo;

export default {
  carousel: makeCarousel,
  webpDetector: makeWebpDetector,
  dialog: makeDialog,
  dropdown: makeDropdown,
  video: makeVideo,
}
