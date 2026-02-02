export default function decorate(block) {
  const allAnchorTags = document.querySelectorAll('a');
  allAnchorTags.forEach((anchorTag) => {
    anchorTag.removeAttribute('title');
  });
  const divCta = document.querySelector('div .cta');
  block.classList.add('faq-accordion');
  if (divCta) {
    const expandCollapse = document.createElement('div');
    expandCollapse.classList.add('expand_collapse');
    const expandBtn = document.createElement('a');
    expandBtn.classList.add('expand-btn');
    expandBtn.textContent = 'Expand All';
    const collapseBtn = document.createElement('a');
    collapseBtn.classList.add('collapse-btn');
    collapseBtn.textContent = 'Collapse All';
    expandCollapse.appendChild(expandBtn);
    expandCollapse.appendChild(collapseBtn);
    const parent = block.parentNode;
    parent.prepend(expandCollapse);
    // event listeners for expand, collapse buttons
    expandCollapse.addEventListener('click', (event) => {
      if (event.target.classList.contains('expand-btn')) {
        document.querySelector('.expand_collapse').classList.add('expanded');
        document.querySelector('.collapse-btn').style.display = 'inline-block';
        const allQuestions = document.querySelectorAll('.faq-question');
        allQuestions.forEach((ele) => {
          ele.classList.add('active');
          ele.nextElementSibling.classList.add('active');
          ele.nextElementSibling.style.maxHeight = `${ele.nextElementSibling.scrollHeight}px`;
        });
      } else if (event.target.classList.contains('collapse-btn')) {
        document.querySelector('.expand_collapse').classList.remove('expanded');
        document.querySelector('.collapse-btn').style.display = 'none';
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach((ele) => {
          ele.nextElementSibling.style.maxHeight = '0';
        });
        setTimeout(() => {
          const allQuestions = document.querySelectorAll('.faq-question');
          allQuestions.forEach((ele) => {
            ele.classList.remove('active');
            ele.nextElementSibling.classList.remove('active');
            ele.nextElementSibling.style.removeProperty('max-height');
          });
        }, 300);
      }
    });
  }
  const faqRows = [...block.children];
  faqRows.forEach((ele) => {
    if (ele.children[0].innerHTML === '') {
      ele.remove();
    }
  });
  faqRows.forEach((row, index) => {
    const faqQuestion = [...row.children][0];
    faqQuestion.classList.add('faq-question');
    faqQuestion.id = `faq-question-${index}`;
    faqQuestion.addEventListener('click', (e) => {
      const currentFaq = e.currentTarget.classList.contains('active');
      const openfaq = block.querySelector('.faq-question.active');
      if (openfaq && !currentFaq) {
        openfaq.classList.toggle('active');
        openfaq.nextElementSibling.style.maxHeight = 0;
        setTimeout(() => {
          openfaq.nextElementSibling.classList.toggle('active');
          faqQuestion.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
      setTimeout(() => {
        const faqAnswer = e.target.nextElementSibling;
        e.target.classList.toggle('active');
        if (e.target.classList.contains('active')) {
          faqAnswer.classList.toggle('active');
          faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
        } else {
          faqAnswer.style.maxHeight = 0;
          setTimeout(() => {
            faqAnswer.classList.toggle('active');
          }, 300);
        }
      }, 300, e);
    });
    const faqAnswer = [...row.children][1];
    faqAnswer.classList.add('faq-answer');
    // open ONLY first row by default
    if (index === 0) {
      faqQuestion.classList.add('active');
      faqAnswer.classList.add('active');
      faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
    }
  });

  // TOOLTIP / CLICK POPUP FOR FIRST TABLE ROW (FRANKLIN SAFE)
  block.querySelectorAll('table tr:first-child td').forEach((cell) => {
    const text = cell.innerHTML; // preserve formatting (strong, p, br)

    // Match [ ... ] including multiline + HTML
    const match = text.match(/\[(.*)\]/s);
    if (!match) return;

    const popupText = match[1].trim();
    const labelText = text.replace(/\[(.*)\]/s, '').trim();

    const wrapper = document.createElement('span');
    wrapper.className = 'popup-wrapper';

    const label = document.createElement('span');
    label.className = 'popup-label';
    label.innerHTML = labelText.replace(/\n/g, '<br>');

    const icon = document.createElement('span');
    icon.className = 'popup-icon';
    icon.innerHTML = 'ⓘ';

    const popup = document.createElement('div');
    popup.className = 'popup-content';
    popup.innerHTML = popupText;

    // REMOVE EMPTY <p> TAGS (EXTRA SPACE FIX)
    popup.querySelectorAll('p').forEach((p) => {
      if (!p.textContent.trim()) p.remove();
    });

    wrapper.append(label, icon, popup);
    cell.innerHTML = '';
    cell.appendChild(wrapper);
  });

  // GLOBAL CLICK HANDLER
  document.addEventListener('click', (e) => {
    const icon = e.target.closest('.popup-icon');

    document.querySelectorAll('.popup-content.show').forEach((p) => {
      if (!p.contains(e.target)) p.classList.remove('show');
    });

    if (icon) {
      const popup = icon.nextElementSibling;
      if (popup) popup.classList.toggle('show');
      e.stopPropagation();
    }
  });
}
