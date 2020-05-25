import createLinkIem from './components/ContactItem';

export default function(links, className) {
  const listContainer = document.createElement('ul');

  links.forEach(link => {
    listContainer.appendChild(createLinkIem(link));
  });

  listContainer.classList.add(...className);
  return listContainer;
}