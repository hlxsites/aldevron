export default function decorate( block) {
  console.log(block);
  if (!block || !block.children || block.children.length === 0) {
    console.error("Invalid block or no children found.");
    return;
  }

  const bgImage = block.children[0].querySelector('img');
  if (!bgImage) {
      console.error("No image found in the first child of the block.");
      return;
  }

  const heroContainer = document.createElement('div');
  heroContainer.className = 'bg-primary';

  // Set background image using CSS property
  heroContainer.style.backgroundImage = `url(${bgImage.src})`;
  heroContainer.style.backgroundSize = 'cover'; // Adjust as needed

  if (block.children.length > 1) {
      const additionalContent = block.children[1]; // Change the index if needed
      if (additionalContent) {
        additionalContent.classList.add('outer', 'hero-content');
          heroContainer.appendChild(additionalContent);
      }
  }
  block.innerText = '';
  block.appendChild(heroContainer);
}
