import {setSlider} from '../../index';

export default function(slidesListLength) {
  const wrapper = document.createElement('div');

  for (let i = 0; i < slidesListLength; i++) {
    const div = document.createElement('div');
    div.setAttribute('num', i);
    divAddEventListener(div);
    wrapper.appendChild(div);
  }

  wrapper.firstChild.classList.add('activeSlide');
  wrapper.classList.add('sliderNavigation');
  return wrapper;
}

function divAddEventListener(div) {
  div.addEventListener('click', (e) => {
    const newCurrentSlide = Number(e.target.getAttribute('num'));
    setSlider(newCurrentSlide);
  });
}