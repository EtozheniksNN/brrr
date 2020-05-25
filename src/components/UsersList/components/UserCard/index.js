import createPicture from '../../../Picture';
import createContactList from '../../../ContactsList';

export default function(user) {
  const cardContainer = document.createElement('div');
  const userPicture = createPicture(user.avatar,
      'https://i.imgur.com/jC5FZ3s.png',
      'profile picture', []);

  cardContainer.classList.add('teamItem');
  cardContainer.appendChild(userPicture);
  cardContainer.appendChild(createTextElem('h4', user.name));
  cardContainer.appendChild(createTextElem('h5', user.position));
  cardContainer.appendChild(createTextElem('p', user.description));

  return cardContainer;
}

function createTextElem(elemName, innerText) {
  const elem = document.createElement(elemName);
  elem.innerText = innerText || 'Invalid data';
  return elem;
}