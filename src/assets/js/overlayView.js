const overlayViewContainer = document.getElementById('overlayViewContainer');
const closeOverlayViewWindow = document.getElementById(
    'closeOverlayViewWindow');
const worksContainer = document.getElementById('works');

worksContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.className === 'workItem' ||
      e.target.parentNode.className === 'workOverlay') {
    overlayViewContainer.classList.add('overlayViewContainerOpen');
    let pathToParentElem;
    if (e.target.className === 'workOverlay') {
      pathToParentElem = e.target.parentNode;
    } else {
      pathToParentElem = e.target.parentNode.parentNode;
    }

    const imgEvently = pathToParentElem.childNodes[3];
    const imgInWindow = overlayViewContainer.childNodes[1].childNodes[3];
    imgInWindow.src = imgEvently.src;
  }
});

closeOverlayViewWindow.onclick = function() {
  overlayViewContainer.classList.remove('overlayViewContainerOpen');
};