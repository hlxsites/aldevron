import { createOptimizedPicture } from '../../scripts/aem.js';
import { div, p } from '../../scripts/dom-builder.js';

export default function decorate(block) {
  /* change to ul, li */

  const imgDiv = div({ class: 'col' },
    div({ class: 'text' },
    p( 
    ),
   ),
  );
 
  [...block.children].forEach((row) => {
    const cboxDiv = div({ class: 'img-colorbox-popup cboxElement' });
    while (row.firstElementChild) cboxDiv.append(row.firstElementChild);
    imgDiv.append(cboxDiv);
  });
  imgDiv.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '1000' }])));
  block.textContent = '';
  block.append(imgDiv);
}

