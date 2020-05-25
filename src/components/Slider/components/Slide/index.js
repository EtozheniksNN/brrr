import createPicture from '../../../Picture';
import {createImage} from '../../../../utils';

export default function(imgSrc) {
  // const slidePicture = createPicture(imgSrc, 'http://placehold.it/950x475', 'slide image', []);
  const slidePicture = createImage(imgSrc, 'http://placehold.it/950x475');

  return slidePicture;
}