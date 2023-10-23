/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const anchorEl = document.createElement('a');
  const refAnchorEl = block.querySelector('a');
  const pic = block.querySelector('picture');
  if (refAnchorEl) {
    if (refAnchorEl.hasAttribute('href')) {
      anchorEl.setAttribute('href', refAnchorEl.getAttribute('href'));
    }
    if (refAnchorEl.hasAttribute('title')) {
      anchorEl.setAttribute('title', refAnchorEl.getAttribute('title'));
    } 
    if (refAnchorEl.hasAttribute('alt')) {
      anchorEl.setAttribute('alt', refAnchorEl.getAttribute('alt'));
    }
    anchorEl.appendChild(pic);
    block.textContent = '';
    block.append(anchorEl);
  } else {
    block.textContent = '';
    block.append(pic);
  }
}
