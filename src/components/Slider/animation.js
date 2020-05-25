export function fadeOut(elemList, className) {
  elemList.forEach(elem => {
    elem.classList.add(className);
  });
}

export function fadeIn(elemList, className) {
  elemList.forEach(elem => {
    elem.classList.remove(className);
  });
}