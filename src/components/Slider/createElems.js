import sliderRadioButtons from './components/RadioButton';

export function createSliderImageContainer() {
  const sliderImageContainer = document.createElement('div');
  sliderImageContainer.classList.add('sliderImageContainer');

  return sliderImageContainer;
}

export function createSliderInfoContainer() {
  const sliderInfoContainer = document.createElement('div');
  sliderInfoContainer.classList.add('sliderInfoContainer');

  return sliderInfoContainer;
}

export function createDescriptionElem(parentElem) {
  const descriptionElem = document.createElement('p');
  parentElem.appendChild(descriptionElem);

  return descriptionElem;
}

export function createNameElem(parentElem) {
  const nameElem = document.createElement('span');
  parentElem.appendChild(nameElem);

  return nameElem;
}

export function createNavigation(parentElem, length) {
  const navigation = sliderRadioButtons(length);
  parentElem.appendChild(navigation);
}