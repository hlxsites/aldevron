export default function decorate(block) {
  const anchorLink = block.querySelector('a');
  const ifrm = document.createElement('iframe');
  ifrm.setAttribute('src', anchorLink);
  ifrm.style.width = '800px';
  ifrm.style.height = '600px';
  ifrm.style.frameBorder = '0';
  ifrm.style.allow = 'autoplay; fullscreen; picture-in-picture';
  ifrm.setAttribute('allowFullScreen', '');
  block.innerHTML = '';
  block.append(ifrm);
}
