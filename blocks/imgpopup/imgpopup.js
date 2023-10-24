import { createOptimizedPicture } from '../../scripts/aem.js';
import { div, p } from '../../scripts/dom-builder.js';
import { loadScript } from '../../scripts/scripts.js';


export default function decorate(block) {

    loadScript('../../scripts/jquery-1.11.2.js', { type: 'text/javascript', charset: 'UTF-8' })
    .then(() => {
      // these scripts depend on jquery:
      loadScript('../../scripts/jquery.colorbox-min.js', { type: 'text/javascript', charset: 'UTF-8' })
      .then(() => {
        // these scripts depend on colorbox:
        loadScript('../../scripts/custom.js', { type: 'text/javascript', charset: 'UTF-8' });
      });
      
    });

    const pVar = p();
    const imgDiv = div({ class: 'content flex cols2' },
        div({ class: 'col' },
        div({ class: 'text' },
        pVar
        ),
        ),
    );

    [...block.children].forEach((row) => {
        while (row.firstElementChild) pVar.append(row.firstElementChild);
    });

    //imgDiv.querySelectorAll('img').forEach((img) => img.closest('div').classList.add('img-colorbox-popup', 'cboxElement'));
    imgDiv.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ }])));
    imgDiv.querySelectorAll('img').forEach((img) => img.src = img.src+'&popup');
    block.textContent = '';
    block.append(imgDiv);
}

