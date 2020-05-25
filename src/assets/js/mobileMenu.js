const mobileMenu = document.getElementById('menu');
const btnNavToggle = document.getElementById('btnNavToggle');
let menuIsOpen = false;

btnNavToggle.onclick = function() {
  toggleMenu();
};

mobileMenu.childNodes.forEach(liElem => {
  liElem.onclick = function() {
    toggleMenu();
  }
});

function toggleMenu() {
  if (!menuIsOpen) {
    menuIsOpen = true;
    mobileMenu.classList.add('mobileNavigationContainerOpen');
    btnNavToggle.classList.add('navToggleRotate');
  } else {
    menuIsOpen = false;
    mobileMenu.classList.remove('mobileNavigationContainerOpen');
    btnNavToggle.classList.remove('navToggleRotate');
  }
}