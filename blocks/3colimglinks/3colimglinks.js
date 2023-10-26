import { createOptimizedPicture } from '../../scripts/aem.js';
import { div, p, a, h4 } from '../../scripts/dom-builder.js';

export default function decorate(block) {

    const col3El = div({ class: 'module mmg-rich-cols cols3-row' });
    //const colwrap = div({class : 'hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_custom_widget module-8'}, col3El);

    [...block.children].forEach((row) => {
        [...row.children].forEach((col, index) => {

            const pic = col.querySelector('picture');
            const pEl = p();
            const colEl = div({ class: `col${index + 1}` }, pEl);
            const coltextEl = div({ class: `col${index + 1}` });

            if (pic) {

                const aEl = col.querySelector('a');
                if (aEl) {
                    const h4El = h4({ style: 'text-align: center;' }, aEl);
                    if (aEl.hasAttribute('href')) {
                        aEl.removeAttribute('class');
                        if (aEl.getAttribute('title').includes('https:')) {
                            const ahrefEl = a({ href: aEl.getAttribute('href'), target: '_blank' }, pic);
                            pEl.append(ahrefEl),
                                col3El.append(colEl)
                        } else {
                            coltextEl.append(h4El);
                            col3El.append(coltextEl);
                            const ahrefEl = a({ href: aEl.getAttribute('href'), target: '_blank' }, pic);
                            pEl.append(ahrefEl),
                            coltextEl.append(pEl),
                            col3El.append(coltextEl)
                        }
                    }
                }
            }
        });
    });
    block.textContent = '';
    col3El.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '' }])));
    block.append(col3El);
}