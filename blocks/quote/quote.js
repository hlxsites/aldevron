import { div } from '../../scripts/dom-builder.js';

export default function decorate(block) {
  // Create a container div for the entire block
  const container = div({ class: 'quote-container' })
  const bgColorDiv = div({ class: 'background-color' })
  container.appendChild(bgColorDiv);
  block.prepend(container);

  // Loop through all the rows in the block
  [...block.children].forEach((row) => {

    if (row.children.length > 1) {
      const row1Column2 = row.children[2];
      const colorCode = row1Column2.textContent.trim();
      // Validate if the text content of the second column is a valid hex code
      const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(colorCode);
      if (isValidHex) {
        bgColorDiv.style.backgroundColor = colorCode;
      } else {
        bgColorDiv.style.backgroundColor = '#989898';
      }
      const row1Column3 = row.children[1];
      const column3Content = row1Column3.textContent.trim();
      row1Column3.style.display = 'none'
      container.appendChild(row1Column3);
      console.log(column3Content);

      const row1Column1 = row.children[0];
      row1Column1.classList.add('quote-title');

      // Ensure text content is wrapped in h2
      const textContent = row1Column1.textContent.trim();
      row1Column1.innerHTML = ''; // Clear existing content
      const h2Element = document.createElement('h2');
      h2Element.id = column3Content;
      h2Element.textContent = textContent;

      row1Column1.appendChild(h2Element);
      row1Column2.style.display = 'none';
      container.appendChild(row1Column1);

    }
  });
}