import { div, h3, p } from '../../scripts/dom-builder.js';

export default function decorate(block) {
    console.log(block);
    const clonedBlock = block.cloneNode(true);
    const pictureElement = clonedBlock.querySelector('picture');
    const anchorButton = clonedBlock.querySelector('p.button-container');
    const heroBanner = div(
        { class: 'hero-banner right-content' },
        pictureElement
    );
    const contentEl = div({ class: 'content' });
    console.log(anchorButton.previousElementSibling && anchorButton.previousElementSibling.textContent != '');
    if (anchorButton.previousElementSibling && anchorButton.previousElementSibling.previousElementSibling && anchorButton.previousElementSibling.previousElementSibling.textContent != '') {
        const title = h3({ class: 'title' }, anchorButton.previousElementSibling.previousElementSibling.textContent);
        contentEl.append(title);
    }
    if (anchorButton.previousElementSibling && anchorButton.previousElementSibling.textContent != '') {
        const description = p({ class: 'description' }, anchorButton.previousElementSibling.textContent);
        contentEl.append(description);
    }
    if (anchorButton.children.length > 0) contentEl.append(anchorButton.children[0]);
    const arrow = div({ class: 'arrow' });
    heroBanner.append(contentEl);
    heroBanner.prepend(arrow);
    block.replaceChildren(heroBanner);
}