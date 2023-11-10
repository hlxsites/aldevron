import { div, h2, h3 } from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const picEle = block.querySelector('img');
  const src = picEle.getAttribute('src');
  const headingDiv = document.createElement('div');
  const wrapper = div({ class: 'wrapper' });
  [...block.children].forEach((element, index) => {
    if (index === 0) {
      const newelement = h2({ class: 'element' }, element.textContent);
      headingDiv.append(newelement);
    } else if (index !== 1) {
      const newelement = h3({ class: 'content' }, element.textContent);
      const imgDiv = document.createElement('div');
      const image = document.createElement('img');
      image.setAttribute('src', src);
      imgDiv.appendChild(image);
      const contentDiv = document.createElement('div');
      contentDiv.append(newelement);
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('imgdiv');
      mainDiv.append(imgDiv);
      mainDiv.append(contentDiv);
      wrapper.append(mainDiv);
    }
  });
  const parent = block.parentNode;
  parent.prepend(headingDiv);
  block.replaceChildren(wrapper);
}
