import {
  div, h2, li, ul,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const clonedBlock = block.cloneNode(true);
  const dataHeading = block.className.split(' ').filter((y) => y.includes('data-block-heading-'));
  const wrapper = div({ class: 'wrapper outer' });
  if (dataHeading.length > 0) wrapper.append(h2({ class: 'title' }, dataHeading[0].replace('data-block-heading-', '')));
  const lists = ul({ class: 'article-lists' });
  [...clonedBlock.children[0].children].forEach((element) => {
    const showcaseBanner = li({ class: 'article-card' });
    const picElement = element.querySelector('picture');
    const subTitle = picElement.parentElement.previousElementSibling;
    const ancButton = picElement.nextElementSibling;
    const description = picElement.parentElement.nextElementSibling;
    if (picElement) {
      picElement.className = 'article-card-img';
      if (subTitle) {
        subTitle.className = 'article-card-subtitle';
        showcaseBanner.append(subTitle);
      }
      showcaseBanner.append(picElement);
      const contentEle = div({ class: 'article-card-body' });
      if (ancButton) {
        ancButton.className = 'redirect-link';
        contentEle.append(ancButton);
      }
      if (description) {
        description.className = 'description';
        contentEle.append(description);
      }
      showcaseBanner.append(contentEle);
    }
    lists.append(showcaseBanner);
  });
  wrapper.append(lists);
  block.replaceChildren(wrapper);
}
