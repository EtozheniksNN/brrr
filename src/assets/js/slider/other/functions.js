import {dataSlider} from './loadJson';
import {imgSliderElem, pElem, spanElem} from './createHtml';

let CURRENT_SLIDE = null;

export function reSetActiveSlide(e) {
  const numSlideAttr = e.target.getAttribute('numSlide');
  if (numSlideAttr !== null) {
    setSlide(+numSlideAttr + +1);
  }
}

export function setSlide(key) {
  key--;
  CURRENT_SLIDE = key;
  imgSliderElem.classList.add('sliderNoActiveImg');
  pElem.classList.add('sliderNoActiveImg');
  spanElem.classList.add('sliderNoActiveImg');
  setTimeout(() => {
    imgSliderElem.src = dataSlider[key].img;
    pElem.innerText = dataSlider[key].description;
    spanElem.innerText = dataSlider[key].name;

    imgSliderElem.classList.remove('sliderNoActiveImg');
    pElem.classList.remove('sliderNoActiveImg');
    spanElem.classList.remove('sliderNoActiveImg');
  }, 400);

  setActiveSlide(key);
}

export function scrollSlide() {
  if (CURRENT_SLIDE === dataSlider.length - 1) setSlide(1);
  else setSlide(+CURRENT_SLIDE + +2);
}

function setActiveSlide(key) {
  document.querySelectorAll('.sliderNavigation div').forEach(n => {
    n.classList.remove('activeSlide');
    if (n.getAttribute('numSlide') == key) {
      n.classList.add('activeSlide');
    }
  });
}
