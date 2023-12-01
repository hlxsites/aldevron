export default function decorate(block) {
  const imageContaner = block.children[0];
  const moduleDiv = document.createElement('div');
  moduleDiv.classList.add('module', 'mmg-rich-columns', 'padding-all', 'custom-bg', 'bg', 'wide-section', 'split-bg', 'style-standard');
  moduleDiv.style.backgroundImage = `url(${imageContaner.querySelector('img').src})`;
  const contentContainer = block.children[0].children[1];
  const outDiv = document.createElement('div');
  outDiv.classList.add('outer');
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  outDiv.append(contentDiv);
  contentDiv.appendChild(contentContainer);
  moduleDiv.appendChild(outDiv);
  block.textContent = '';
  block.appendChild(moduleDiv);
}
