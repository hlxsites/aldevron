export default function decorate(block) {
  // Loop through all the rows in the block
  [...block.children].forEach((row) => {
      if (row.children.length > 1) {
          const row1Column2 = row.children[1];
          const colorCode = row1Column2.textContent.trim();
         // Validate if the text content of the second column is a valid hex code
          const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(colorCode);
          if (isValidHex) {
              block.style.backgroundColor = colorCode;
          } else {
              block.style.backgroundColor = '#f5f5f5';
          }            
          const row1Column1 = row.children[0];
          const h2Element = row1Column1.querySelector('h2');
          if (h2Element) {
              h2Element.style.color = 'white';
              h2Element.classList.add('quote-title');
              h2Element.style.borderLeft = 'unset';
              h2Element.style.padding = '0 0 0 100px';  
          }
            row1Column2.style.display = 'none';
      }
  });
}