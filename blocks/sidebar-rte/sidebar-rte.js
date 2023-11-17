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
            link.innerHTML = ''; // Clear the existing content of the link
            const imageClone = image.cloneNode(true); // Clone the image
            link.appendChild(imageClone); // Insert the cloned image into the link
          }
        }
      }
    });
  }
}
