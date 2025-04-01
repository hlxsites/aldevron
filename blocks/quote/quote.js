import { div } from '../../scripts/dom-builder.js';

export default function decorate(block) {
// Create a container div for the entire block
  const container = div({class: 'quote-container'})
  const bgColorDiv = div({class: 'background-color'})
  container.appendChild(bgColorDiv); 
  block.prepend(container);

  // Loop through all the rows in the block
  [...block.children].forEach((row) => {
      if (row.children.length > 1) {
          const row1Column2 = row.children[1];
          const colorCode = row1Column2.textContent.trim();
         // Validate if the text content of the second column is a valid hex code
          const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(colorCode);
          if (isValidHex) {
            bgColorDiv.style.backgroundColor = colorCode;
          } else {
            bgColorDiv.style.backgroundColor = '#989898';
          }            
          const row1Column1 = row.children[0];
          row1Column1.classList.add('title');
          const h2Element = row1Column1.querySelector('h2');
            row1Column2.style.display = 'none';
            container.appendChild(row1Column1);
      }
  });
}