export default function decorate(block) {
  // Convert buttons to normal links only for the "hyperlink" variant.
  if (block.classList.contains('hyperlink')) {
    block.querySelectorAll('p.button-container > a.button').forEach((link) => {
      link.classList.remove('button');

      const container = link.parentElement;
      if (container?.classList.contains('button-container')) {
        container.classList.remove('button-container');
      }
    });
  }

  // Existing image-link functionality.
  const images = block.querySelectorAll('picture');

  images.forEach((image) => {
    const { parentElement } = image;
    const nextSibling = parentElement?.nextSibling;
    const nextNextSibling = nextSibling?.nextSibling;

    if (!nextNextSibling) return;

    const link = nextNextSibling.querySelector('a');
    if (!link) return;

    // Handle image links.
    if (link.href === link.innerText.trim()) {
      if (link.parentElement?.tagName === 'STRONG') {
        link.setAttribute('target', '_blank');
      }

      link.innerHTML = '';
      link.appendChild(image.cloneNode(true));

      if (parentElement?.tagName === 'P') {
        parentElement.remove();
      }
    }

    // Handle secondary image links.
    if (link.classList.contains('secondary')) {
      link.innerHTML = '';
      link.appendChild(image.cloneNode(true));

      if (parentElement?.tagName === 'P') {
        parentElement.remove();
      }
    }
  });
}
