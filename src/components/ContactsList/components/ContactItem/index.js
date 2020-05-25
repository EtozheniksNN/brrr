import { LINKS_ICON_MAP } from '../../../../constants';

export default function(href) {
  const liWrapper = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', href);

  const icon = document.createElement('i');
  const {hostname} = new URL(href);
  if (LINKS_ICON_MAP.has(hostname)) {
    icon.classList.add(...LINKS_ICON_MAP.get(hostname));
  } else {
    icon.classList.add('fas', 'fa-unlink');
  }

  link.appendChild(icon);
  liWrapper.appendChild(link);

  return liWrapper;
}

