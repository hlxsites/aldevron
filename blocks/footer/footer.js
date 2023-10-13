import { readBlockConfig, decorateIcons } from '../../scripts/aem.js';
/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';
  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});
  function createDivElement(className, IDName) {
    const divEl = document.createElement('div');
    divEl.setAttribute('class', className);
    divEl.setAttribute('id', IDName);
    return divEl;
  }
  function addClassesToListItems(element, depth) {
    for (let i = 0; i < element.length; i += 1) {
      const item = element[i];
      item.classList.add('hs-menu-item', `hs-menu-depth-${depth}`, 'hs-item-has-children', `menu-num-${i + 1}`);
      const childItems = item.querySelector('ul');
      if (childItems?.children?.length > 0) {
        addClassesToListItems(childItems.children, depth + 1);
      }
    }
  }
  if (resp.ok) {
    const html = await resp.text();
    const topContainer = createDivElement('top-container', '');
    const footerOrangeSection = createDivElement('', 'footer-orange');
    const footerParent = createDivElement('outer', '');
    const footerWapper = createDivElement('hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal', 'hs_menu_wrapper_footer_nav');
    const footerUl = createDivElement('outer', 'footer-black');
    const socialIcons = createDivElement('social-icons clearfix', '');

    footerUl.innerHTML = html;
    footerWapper.append(footerUl.querySelector('ul'));
    footerOrangeSection.append(footerParent);
    topContainer.append(footerOrangeSection);
    footerParent.append(footerWapper);
    const childItems = footerWapper.children[0].children;
    addClassesToListItems(childItems, 1);
    socialIcons.append(footerUl.querySelector('p'));
    footerParent.append(socialIcons);
    topContainer.append(footerUl);
    decorateIcons(footerWapper);
    block.append(topContainer);
  }
}
