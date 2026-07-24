export default function decorate(block) {
  // Get all images that don't already have an alt attribute
  const images = [...document.querySelectorAll('main img')]
    .filter((img) => !img.alt || img.alt.trim() === '');

  // Process each row in the block
  [...block.children].forEach((row) => {
    const cols = [...row.children];

    // Skip invalid rows
    if (cols.length < 2) return;

    // Extract image number (supports "Image1" and "Image 1")
    const match = cols[0].textContent.trim().match(/\d+/);
    if (!match) return;

    const index = parseInt(match[0], 10) - 1;
    const alt = cols[1].textContent.trim();

    // Skip if no alt text
    if (!alt) return;

    // Apply alt text if image exists
    if (images[index]) {
      images[index].setAttribute('alt', alt);
    }
  });

  // Remove the block from the page
  block.remove();
}