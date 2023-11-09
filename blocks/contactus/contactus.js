export default function decorate() {
  const contactUsClass = document.getElementsByClassName('contactus block');
  contactUsClass[0].setAttribute('id', 'section-support');
  contactUsClass[0].children[0].setAttribute('class', 'outer');
  contactUsClass[0].children[0].children[0].setAttribute('class', 'text');
  const contactUsDiv = contactUsClass[0].children[0].children[0];
  const pTags = contactUsDiv.getElementsByTagName('p');
  const aTags = contactUsDiv.querySelector('a');
  if (aTags) {
    aTags.hasAttribute('title');
    aTags.removeAttribute('title');
  }
  let innerElements = '';
  let phone = '';
  for (let i = 0; i < pTags.length; i += 1) {
    if (i === 0) {
      const ContactUsTitle = pTags[i].outerHTML.replace(/<p>/g, '<h2>');
      innerElements += ContactUsTitle.replace(/<\/p>/g, '</h2>');
    } else if (i === 1) {
      innerElements += pTags[i].outerHTML;
    } else if (i === 3) {
      let contactNumber = pTags[2].innerHTML.trim();
      let contactNumberReplace = contactNumber.replace(/[()-\s]/g,'');
      phone = pTags[2].outerHTML.replace(/<p>/g, `<a class='phone' href="tel:${contactNumberReplace}">`);
      phone.replace(/<\/p>/g, '</a>');
      pTags[i].innerHTML = `<br><div class="buttons"> ${phone + pTags[i].innerHTML} </div>`;
      const button = pTags[i].outerHTML.replace(/<p>/g, '');
      innerElements += button.replace(/<\/p>/g, '');
    }
  }
  contactUsDiv.innerHTML = innerElements;
}
