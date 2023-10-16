export default function decorate(block) {
  block.innerText = '';
  const separator = document.createElement('hr');
  separator.className = 'outer';
  block.appendChild(separator);
}
