export default function decorate(block) {
  const clonedBlock = block.cloneNode(true);
  const pictureElement = clonedBlock.querySelector('picture');
  const moduleDiv = document.createElement('div');
  moduleDiv.classList.add('module', 'mmg-rich-columns', 'padding-all', 'custom-bg', 'bg', 'wide-section', 'split-bg', 'style-standard');
  moduleDiv.style.backgroundColor = '#fff';
  moduleDiv.style.backgroundImage = `url(${pictureElement.querySelector('img').src})`;
  const outDiv = document.createElement('div');
  outDiv.classList.add('outer');
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  outDiv.append(contentDiv);
  const colWithCtaDiv = document.createElement('div');
  colWithCtaDiv.classList.add('col', 'with-cta');
  contentDiv.append(colWithCtaDiv);
  const textDiv = document.createElement('div');
  textDiv.classList.add('text');
  colWithCtaDiv.append(textDiv);
  const h2 = document.createElement('h2');
  h2.classList.add('title');
  h2.textContent = 'About Aldveron';
  textDiv.append(h2);
  const p = document.createElement('p');
  const span = document.createElement('span');
  textDiv.append(p);
  p.append(span);
  const text1 = block.querySelector('div > div + div > p + p');
  span.textContent = text1.textContent;
  const p2 = document.createElement('p');
  p2.classList.add('actions');
  const anchor = document.createElement('a');
  anchor.classList.add('button');
  anchor.setAttribute('href', '/about-us');
  anchor.textContent = 'Learn More';
  p2.append(anchor);
  textDiv.append(p2);
  moduleDiv.append(outDiv);
  block.textContent = '';
  block.append(moduleDiv);
}