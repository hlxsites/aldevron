import { waitForLCP } from "../../scripts/aem";

export default function build(block) {
  waitForLCP(block);
  const bgImage = block.children[0].querySelector('img');

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
