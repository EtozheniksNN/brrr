import imgForCurrentSlide from './components/Slide';
import {createNavigation, createDescriptionElem, createSliderInfoContainer, createSliderImageContainer, createNameElem} from './createElems';
import {fadeOut, fadeIn} from './animation';

const Slider = {
  currentSlide: 0,
  slidesList: [],
  getNumNextSlide: function() {
    return (this.currentSlide + 1) % this.slidesList.length;
  },
  getLength() {
    return this.slidesList.length;
  },
};

const imageContainer = createSliderImageContainer();
const infoContainer = createSliderInfoContainer();
const descriptionElem = createDescriptionElem(infoContainer);
const nameElem = createNameElem(infoContainer);

export default function(slidesList) {
  Slider.slidesList = slidesList;

  const wrapper = document.createElement('div');
  wrapper.appendChild(imageContainer);
  wrapper.appendChild(infoContainer);

  createNavigation(infoContainer, Slider.getLength());
  setDefaultSlide();
  return wrapper;
}

export function setSlider(newCurrentSlide) {
  Slider.currentSlide = newCurrentSlide;
  fadeOut([imageContainer, descriptionElem, nameElem], 'sliderClose');
  setTimeout(() => {
    imageContainer.removeChild(imageContainer.firstChild);
    imageContainer.appendChild(imgForCurrentSlide(Slider.slidesList[Slider.currentSlide].img));
    fadeIn([imageContainer, descriptionElem, nameElem], 'sliderClose');
  }, 400);

  descriptionElem.innerText = Slider.slidesList[Slider.currentSlide].description;
  nameElem.innerText = Slider.slidesList[Slider.currentSlide].name;

  setActiveButton();
}

setInterval(() => {
  setSlider(Slider.getNumNextSlide());
}, 10000);

function setDefaultSlide() {
  descriptionElem.innerText = Slider.slidesList[Slider.currentSlide].description;
  nameElem.innerText = Slider.slidesList[Slider.currentSlide].name;
  imageContainer.appendChild(imgForCurrentSlide(Slider.slidesList[Slider.currentSlide].img));
}

function setActiveButton() {
  const navigation = document.getElementsByClassName('sliderNavigation')[0];

  navigation.childNodes.forEach((elem, i) => {
    elem.classList.remove('activeSlide');
    if(i === Slider.currentSlide)
      elem.classList.add('activeSlide');
  })
}
