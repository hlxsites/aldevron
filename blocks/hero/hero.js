export default function decorateBlock(block) {
  const bgImage = block.querySelector('img');

  if (bgImage) {
    const heroContainer = document.createElement('div');
    heroContainer.className = 'bg-primary';
    heroContainer.style.backgroundImage = `url(${bgImage.src})`;
    heroContainer.style.backgroundSize = 'cover';

    if (block.children.length > 1) {
      const additionalContent = block.children[1];
      if (additionalContent) {
        additionalContent.classList.add('outer', 'hero-content');
        heroContainer.appendChild(additionalContent);
      }
    }
    block.innerHTML = ''; // Clear the block content before appending
    block.appendChild(heroContainer);
    block.style.display = 'block';
  }
}
