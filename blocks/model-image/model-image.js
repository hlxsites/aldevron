// creating the elements with class names
const creteEleAddCls = (obj) => {
  const { classes } = obj;
  let { targetEle } = obj;
  targetEle = document.createElement(targetEle);
  if (classes && classes.length > 0) {
    targetEle.classList.add(...classes);
  }
  return targetEle;
};
// adding the inline-styles for the element
const addStyles = (ele, obj) => {
  for (const [key, value] of Object.entries(obj)) {
    ele.style[key] = value;
  }
};
// setting the attributes for the element
const setAttributes = (ele, obj) => {
  for (const [key, value] of Object.entries(obj)) {
    ele.setAttribute(key, value);
  }
};
export default function decorate(block) {
  const imgWrap = creteEleAddCls({ targetEle: 'div', classes: ['img-colorbox-popup', 'cboxElement'] });
  const pictureTag = block.querySelector('picture');
  const pictureTagForZoom = pictureTag.cloneNode(true);
  addStyles(pictureTagForZoom, { cursor: 'pointer' });
  imgWrap.append(pictureTag);
  imgWrap.classList.add('image-wrapper');
  block.textContent = '';
  block.append(imgWrap);
  const overlayDiv = creteEleAddCls({ targetEle: 'div', classes: [] });
  addStyles(overlayDiv, {
    display: 'none',
    opacity: '0',
    cursor: 'pointer',
    visibility: 'visible',
  });
  setAttributes(overlayDiv, {
    id: 'cboxOverlay',
  });
  document.body.append(overlayDiv);

  const colorboxWrapper = creteEleAddCls({ targetEle: 'div', classes: ['colorbox-wrapper'] });
  const colorboxDiv = creteEleAddCls({ targetEle: 'div', classes: [] });
  setAttributes(colorboxDiv, {
    id: 'colorbox',
    role: 'dialog',
    tabindex: '-1',
  });
  addStyles(colorboxDiv, {
    display: 'none',
    visibility: 'visible',
    // top: '50px',
    // left: '20px',
    // position: 'absolute',
  });

  colorboxWrapper.append(colorboxDiv);
  document.body.append(colorboxWrapper);
  const pictureWrapperDiv = creteEleAddCls({ targetEle: 'div', classes: ['picture-wrapper'] });
  const pictureOverflowWrapperDiv = creteEleAddCls({ targetEle: 'div', classes: ['picture-overflow-wrap'] });
  pictureOverflowWrapperDiv.append(pictureTagForZoom);
  pictureWrapperDiv.append(pictureOverflowWrapperDiv);
  colorboxDiv.append(pictureWrapperDiv);
  const cboxWrapperSecondChildCboxbtnIconSearch = creteEleAddCls({ targetEle: 'span', classes: ['button', 'icon-search'] });
  const cboxWrapperSecondChildCboxCloseBtn = creteEleAddCls({ targetEle: 'button', classes: [] });
  setAttributes(cboxWrapperSecondChildCboxCloseBtn, {
    id: 'cboxClose',
    type: 'button',
  });
  cboxWrapperSecondChildCboxCloseBtn.innerHTML = '&#215';
  colorboxDiv.append(cboxWrapperSecondChildCboxCloseBtn);
  colorboxDiv.append(cboxWrapperSecondChildCboxbtnIconSearch);
  document.querySelector('.img-colorbox-popup.cboxElement').addEventListener('click', () => {
    addStyles(overlayDiv, {
      display: 'block',
      opacity: '0.7',
      cursor: 'pointer',
      visibility: 'visible',
    });
    addStyles(colorboxDiv, {
      display: 'block',
      visibility: 'visible',
      // top: '50px',
      // left: '20px',
      // right: '20px',
      // position: 'absolute',
      'z-index': '9999',
      'background-color': 'white',
      padding: '15px',
    });
  });
  document.getElementById('cboxClose').addEventListener('click', () => {
    addStyles(overlayDiv, {
      display: 'none',
      opacity: '0',
    });
    addStyles(colorboxDiv, {
      display: 'none',
    });
    addStyles(document.querySelector('.picture-wrapper'), { overflow: 'unset' });
    addStyles(document.querySelector('.picture-overflow-wrap'), { width: '100%', height: '100%' });
  });
  overlayDiv.addEventListener('click', () => {
    addStyles(overlayDiv, {
      display: 'none',
      opacity: '0',
    });
    addStyles(colorboxDiv, {
      display: 'none',
    });
    addStyles(document.querySelector('.picture-wrapper'), { overflow: 'unset' });
    addStyles(document.querySelector('.picture-overflow-wrap'),
      {
        width: '100%',
        height: '100%',
      });
  });
  pictureTagForZoom.addEventListener('click', () => {
    addStyles(document.querySelector('.picture-wrapper'), { overflow: 'auto' });
    addStyles(document.querySelector('.picture-overflow-wrap'),
      {
        width: `${pictureTag.querySelector('img').getAttribute('width')}px`,
        height: `${pictureTag.querySelector('img').getAttribute('height')}px`
      });
  });
  document.querySelector('.button.icon-search').addEventListener('click', () => {
    addStyles(document.querySelector('.picture-wrapper'), { overflow: 'auto' });
    addStyles(document.querySelector('.picture-overflow-wrap'),
      {
        width: '133%'
      }
    );
  });
}
