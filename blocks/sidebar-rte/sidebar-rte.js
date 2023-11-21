export default function decorate(block) {
  if (block.classList.contains('hyperlink')) {
    const images = block.querySelectorAll('picture');
    images.forEach((image) => {
      const { parentElement } = image;
      const { nextSibling } = parentElement;
      if (nextSibling) {
        const nextNextSibling = nextSibling.nextSibling;
        if (nextNextSibling) {
          const link = nextNextSibling.querySelector('a');
          if (link && link.classList.contains('secondary')) {
            link.innerHTML = '';
            link.appendChild(image);
          }
        }
      }
    });
  }
}
