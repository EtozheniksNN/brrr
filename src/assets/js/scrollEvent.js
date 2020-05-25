const headerElem = document.getElementById('navigation');
const SCROLL_HEIGHT = 35;

window.onscroll = function() {
  setStateNav();
};

window.onload = function() {
  setStateNav();
};

function setStateNav() {
  if (window.scrollY > SCROLL_HEIGHT &&
      !headerElem.classList.contains('navFixed')) {
    headerElem.classList.add('navFixed');
  } else if (window.scrollY <= SCROLL_HEIGHT &&
      headerElem.classList.contains('navFixed')) {
    headerElem.classList.remove('navFixed');
  }
}