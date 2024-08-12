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
  function callSocialIcons(socialIcons) {
    const allAnchorTags = createDivElement('social-icons', '');
    for (let i = 0; i < socialIcons.children.length; i += 1) {
      const createAtag = document.createElement('a');
      createAtag.appendChild(socialIcons.children[i]?.children[0]?.querySelector('picture'));
      createAtag.setAttribute('href', socialIcons.children[i]?.children[1]?.children[0].href);
      createAtag.setAttribute('target', '_blank');
      createAtag.setAttribute('aria-label', 'Social Media Link');
      allAnchorTags.appendChild(createAtag);
    }
    return allAnchorTags;
  }

  if (resp.ok) {
    const html = await resp.text();
    const topContainer = createDivElement('top-container', '');
    const footerOrangeSection = createDivElement('', 'footer-orange');
    const footerParent = createDivElement('outer', '');
    const footerWapper = createDivElement('hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal', 'hs_menu_wrapper_footer_nav');
    const footerUl = createDivElement('outer', 'footer-black');
    footerUl.innerHTML = html;
    footerWapper.append(footerUl.querySelector('ul'));
    footerOrangeSection.append(footerParent);
    topContainer.append(footerOrangeSection);
    footerParent.append(footerWapper);
    const childItems = footerWapper.children[0].children;
    // const childImage = childItems[5]
    // footerWapper.append(footerUl)
    addClassesToListItems(childItems, 1);
    footerParent.append(callSocialIcons(footerUl.children[0].children[0]));
    footerParent.append(footerUl);
    const footLogo = document.createElement('a');
    footLogo.id = 'footLogo';
    footLogo.target = '_blank';
    footLogo.ariaLabel = 'Danaher Logo';
    // footLogo.href = '';
    // footLogo.innerHTML = footerUl.children[0].children[2].innerHTML;

    footLogo.append(footerUl.children[0]?.children[1]?.children[0]?.children[0]?.querySelector('picture'));
    footLogo.href = footerUl.children[0]?.children[1]?.children[0]?.children[1]?.children[0]?.href;

    footerUl.children[0].children[1].replaceWith(footLogo);
    topContainer.append(footerUl);
    const links = footerWapper.querySelectorAll('a');
    links.forEach((link) => {
      if (link.parentElement.tagName === 'STRONG') {
        link.setAttribute('target', '_blank');
        link.classList.add('text-normal');
      }
    });

    function footerOpco() {
      const ulElement = document.createElement('ul');
      const items = [
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_1b4cb13c1b58a2aa9440c48591885c2d142ef2ad9.svg?width=2000&format=webply&optimize=medium', alt: 'Abcam' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_1bdcd4f292eff7c94564c2edabbe6f2990b7c2771.svg?width=2000&format=webply&optimize=medium', alt: 'Beckman' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_18ce6e6ac9fa86b1e38dd5d5aa2c26739f7699a7a.svg?width=2000&format=webply&optimize=medium', alt: 'IDBS' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_17e0c34915747b51dc4f3b1d6115a354a005f7811.svg?width=2000&format=webply&optimize=medium', alt: 'Leica' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_14551887088f7666163b3db5b7c4563db95aeba9c.svg?width=2000&format=webply&optimize=medium', alt: 'MolDev' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_16925698572ba5cd9b64350134f680855a9896f9f.svg?width=2000&format=webply&optimize=medium', alt: 'Phenomenex' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_190d426a0f0258e8636507a15d8aedfaed8649fc1.svg?width=2000&format=webply&optimize=medium', alt: 'Sciex' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_142f5f1953984f372a389eba53a44db24cebcd3a8.svg?width=2000&format=webply&optimize=medium', alt: 'Aldevron' },
        { href: 'https://www.aldevron.com/?utm_source=aldevron_website&utm_medium=referral&utm_content=footer', src: 'https://lifesciences.danaher.com/media_1dfadbb273bd8868ca3659447071c5aeee1525cbf.svg?width=2000&format=webply&optimize=medium', alt: 'IDT' },
      ];
      items.forEach(item => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.href = item.href;
        aElement.target = '_blank';
        const imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.alt = item.alt;
        aElement.appendChild(imgElement);
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
      });
    
      const footerContainer = document.createElement('div');
      footerContainer.classList.add('footer-opco');
      footerContainer.appendChild(ulElement);
      document.body.appendChild(footerContainer);
    }

    decorateIcons(footerWapper);
    block.append(topContainer);
    footerOpco();
  }
}
