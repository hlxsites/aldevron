import { readBlockConfig, decorateIcons } from '../../scripts/aem.js';
/**
 * loads and decorates the carousel
 * @param {Element} block The carousel block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';
  // fetch carousel content
  const carouselPath = cfg.carousel || '/carousel';
  const resp = await fetch(`${carouselPath}.plain.html`, window.location.pathname.endsWith('/carousel') ? { cache: 'reload' } : {});
  function createDivElement(className, IDName) {
    const divEl = document.createElement('div');
    divEl.setAttribute('class', className);
    divEl.setAttribute('id', IDName);
    return divEl;
  }
  if (resp.ok) {
    const html = await resp.text();
    const topContainer = createDivElement('top-container', '');
    const carouselWapper = createDivElement('carousel', 'hs_menu_wrapper_carousel_nav');
    carouselWapper.innerHTML = html;
    decorateIcons(carouselWapper);
    block.append(topContainer);
  }
}
