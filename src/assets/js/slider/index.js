import {sliderNavigation} from './other/createHtml.js';
import {reSetActiveSlide, scrollSlide} from './other/functions.js'

sliderNavigation.onclick = function(e) {
  reSetActiveSlide(e);
};

setInterval(scrollSlide, 10000);