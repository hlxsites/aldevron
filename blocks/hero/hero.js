export default function decorate() {
  const heroClass = document.getElementsByClassName('hero block');
  heroClass[0].setAttribute('id', 'heading');
  heroClass[0].children[0].setAttribute('class', 'outer');
  heroClass[0].children[0].children[0].setAttribute('class', 'vertical');
  const heroDiv = heroClass[0].children[0].children[0];
  const pTags = heroDiv.getElementsByTagName('p');
  const supTag = heroDiv.getElementsByTagName('sup');
  supTag[0].style.fontSize = '60%';
  const heroSrc = pTags[0].children[0].querySelector('img').src;
  heroClass[0].style.backgroundImage = `url('${heroSrc}')`;
  let innerElements = '';
  for (let i = 0; i < pTags.length; i += 1) {
    if (pTags[i].outerHTML.includes('class')) {
      innerElements += pTags[i].innerHTML.replace('class="button"', 'style="background-color:#000;" class="hs-button" target="_blank"');
    } else if (i === 1) {
      const heroTitle = pTags[i].outerHTML.replace(/<p[ ]*>/g, '');
      innerElements += heroTitle.replace(/<\/p>/g, '<br>');
    } else if (i === 2) {
      const heroDescription = pTags[i].outerHTML.replace(/<p[ ]*>/g, '<span style="font-size: 70%;">');
      innerElements += heroDescription.replace(/<\/p>/g, '</span><br>');
    }
  }
  heroDiv.innerHTML = `<h1>${innerElements}</h1>`;
}
