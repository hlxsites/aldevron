export default function decorate(block) {
  const clonedBlock = block.cloneNode(true);
  const pictureElement = clonedBlock.querySelector('picture');
  const quotelistWrapper = document.createElement('div');
  const moduleDiv = document.createElement('div');
  quotelistWrapper.append(moduleDiv);
  quotelistWrapper.classList.add('quotelist-wrapper');
  moduleDiv.classList.add('hs_cos_wrapper', 'hs_cos_wrapper_widget', 'hs_cos_wrapper_type_module', 'module-1');
  moduleDiv.setAttribute('data-hs-cos-type', 'module');
  moduleDiv.setAttribute('data-hs-cos-general-type', 'widget');
  const quoteboxDiv = document.createElement('div');
  quoteboxDiv.classList.add('quote-box');
  const blockquoteDiv = document.createElement('blockquote');
  blockquoteDiv.classList.add('quote');
  blockquoteDiv.textContent = clonedBlock.querySelector('p').textContent;
  quoteboxDiv.append(blockquoteDiv);
  const para = document.createElement('p');
  para.classList.add('details');
  const spanInside = document.createElement('span');
  spanInside.classList.add('name');
  spanInside.textContent = clonedBlock.querySelector('p + p').textContent;
  para.append(spanInside);
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('title');
  spanTitle.textContent = clonedBlock.querySelector('p + p + p').textContent;
  para.append(spanTitle);
  quoteboxDiv.append(para);
  const spanIconWrapper = document.createElement('span');
  spanIconWrapper.classList.add('accentColor1', 'fa');
  const spanIcon = document.createElement('i');
  spanIcon.classList.add('fa', 'fa-quote-right');
  spanIconWrapper.append(spanIcon);
  quoteboxDiv.append(spanIconWrapper);
  moduleDiv.append(quoteboxDiv);
  if (pictureElement) {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('testimonial-headshot', 'text-center');
    const image = document.createElement('img');
    image.setAttribute('width', `${pictureElement.querySelector('img').width}`);
    image.setAttribute('height', `${pictureElement.querySelector('img').height}`);
    image.setAttribute('alt', `${pictureElement.querySelector('img').alt}`);
    image.setAttribute('src', `${pictureElement.querySelector('img').src}`);
    imageWrapper.append(image);
    moduleDiv.append(imageWrapper);
    quoteboxDiv.classList.add('triangle-icon');
  }
  if (!pictureElement) {
    quoteboxDiv.style.marginBottom = 0;
  }
  block.textContent = '';
  block.append(quotelistWrapper);
}
