export default function decorateBlock(block) {
  const bgImage = block.querySelector('img');

  if (bgImage) {
    const heroContainer = document.createElement('div');
    heroContainer.className = 'bg-primary';
    heroContainer.style.backgroundImage = `url(${bgImage.src})`;
    heroContainer.style.backgroundSize = 'cover';
    heroContainer.style.height = '400px'; // Set a fixed height to prevent layout shift

    block.innerHTML = ''; // Clear the block content before appending

    if (block.children.length > 1) {
      const additionalContent = block.children[1];
      if (additionalContent) {
        additionalContent.classList.add('outer', 'hero-content');
        heroContainer.appendChild(additionalContent);
      }
    }

    block.appendChild(heroContainer);
  }
}
