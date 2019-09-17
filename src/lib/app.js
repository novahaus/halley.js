import makeCarousel from './modules/carousel';
import makeWebpDetector from './modules/webp-detector';
import makeDialog from './modules/dialog';
import makeDropdown from './modules/dropdown';

export const carousel = makeCarousel
export const webpDetector = makeWebpDetector;
export const dialog = makeDialog;
export const dropdown = makeDropdown;

export default {
  carousel: makeCarousel,
  webpDetector: makeWebpDetector,
  dialog: makeDialog,
  dropdown: makeDropdown,
}
