/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const anchorEl = document.createElement('a');
  const refAnchorEl = block.querySelector('a');
  const pic = block.querySelector('picture');
  if (refAnchorEl) {
    refAnchorEl.hasAttribute('href') && anchorEl.setAttribute('href', refAnchorEl.getAttribute('href'));
    refAnchorEl.getAttribute('title') && anchorEl.setAttribute('title', refAnchorEl.getAttribute('title'));
    refAnchorEl.getAttribute('alt') && anchorEl.setAttribute('alt', refAnchorEl.getAttribute('alt'));
    anchorEl.appendChild(pic);
    block.textContent = '';
    block.append(anchorEl);
  } else {
    block.textContent = '';
    block.append(pic);
  }
}
