export default function decorate(block) {
  const clonedBlock = block.cloneNode(true);
  // const sidebarDiv = document.createElement('div');
  // sidebarDiv.setAttribute('id', 'sidebar');
  const pictureElement = clonedBlock.querySelector('picture');
  const moduleDiv = document.createElement('div');
  moduleDiv.classList.add('hs_cos_wrapper', 'hs_cos_wrapper_widget', 'hs_cos_wrapper_type_module', 'module-1');
  moduleDiv.setAttribute('data-hs-cos-type', 'module');
  moduleDiv.setAttribute('data-hs-cos-general-type', 'widget');
  moduleDiv.setAttribute('id', clonedBlock.querySelector('h2').textContent.split(" ")[1]);
  const quoteboxDiv = document.createElement('div');
  quoteboxDiv.classList.add('quote-box');
  const blockquoteDiv = document.createElement('blockquote');
  blockquoteDiv.classList.add('quote');
  blockquoteDiv.textContent = clonedBlock.querySelector('blockquote > p').textContent;
  quoteboxDiv.append(blockquoteDiv);
  const para = document.createElement('p');
  para.classList.add('details');
  const spanInside = document.createElement('span');
  spanInside.classList.add('name');
  spanInside.textContent = clonedBlock.querySelector('blockquote + p').textContent;
  para.append(spanInside);
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('title');
  spanTitle.textContent = clonedBlock.querySelector('blockquote + p + p').textContent;
  para.append(spanTitle);
  quoteboxDiv.append(para);
  const spanIconWrapper = document.createElement('span');
  spanIconWrapper.classList.add('accentColor1', 'fa');
  const spanIcon = document.createElement('i');
  spanIcon.classList.add('fa', 'fa-quote-right');
  spanIconWrapper.append(spanIcon);
  quoteboxDiv.append(spanIconWrapper);
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('testimonial-headshot', 'text-center');
  const image = document.createElement('img');
  image.setAttribute('width', 279);
  image.setAttribute('height', 325);
  image.setAttribute('alt', 'Starter Culture Graphic');
  image.setAttribute('src', `${pictureElement.querySelector('img').src}`)
  imageWrapper.append(image);
  moduleDiv.append(quoteboxDiv);
  moduleDiv.append(imageWrapper);
  // sidebarDiv.append(moduleDiv)
  block.textContent = '';
  block.append(moduleDiv);
  // block.append(sidebarDiv);
}
