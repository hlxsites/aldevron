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
            row1Column2.style.display = 'none';
        } else {
          console.warn(`Invalid hex color code: ${colorCode}`);
        }
      }
    });
  }