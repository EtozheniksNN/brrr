import {setSlide} from './functions.js';
let i = 0;

fetch('../../data/slider.json').then(response => {
  return response.json();
}).then(data => {
  data.forEach(c => {
    dataSlider.push(c);
    const divCircle = document.createElement('div');
    divCircle.setAttribute('numSlide', i++);
    sliderNavigation.appendChild(divCircle);
  });
}).then(() => {
  setSlide(1);
});

export let dataSlider = [];
