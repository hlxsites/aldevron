export default function decorate(block) {
  const divCta = document.querySelector('div .cta');
  if (divCta) {
    const expandCollapse = document.createElement('div');
    expandCollapse.classList.add('expand_collapse');
    const expandBtn = document.createElement('a');
    expandBtn.classList.add('expand-btn');
    expandBtn.setAttribute('href', '#');
    expandBtn.textContent = 'Expand All';
    const collapseBtn = document.createElement('a');
    collapseBtn.classList.add('collapse-btn');
    collapseBtn.setAttribute('href', '#');
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
        const allQuestions = document.querySelectorAll('.faq-question');
        allQuestions.forEach((ele) => {
          ele.classList.remove('active');
          ele.nextElementSibling.classList.remove('active');
          ele.nextElementSibling.style.removeProperty('max-height');
        });
      }
    });
  }
  const faqRows = [...block.children];
  block.classList.add('faq-accordion');
  faqRows.forEach((row) => {
    const faqQuestion = [...row.children][0];
    faqQuestion.classList.add('faq-question');
    faqQuestion.addEventListener('click', (e) => {
      const currentFaq = e.currentTarget.classList.contains('active');
      const openfaq = block.querySelector('.faq-question.active');
      if (openfaq && !currentFaq) {
        openfaq.classList.toggle('active');
        openfaq.nextElementSibling.classList.toggle('active');
      }
      faqQuestion.nextElementSibling.style.removeProperty('max-height');
      e.currentTarget.classList.toggle('active');
      e.currentTarget.nextElementSibling.classList.toggle('active');
      const faqAnswer = e.currentTarget.nextElementSibling;
      if (faqAnswer.style.maxHeight) {
        faqAnswer.style.removeProperty('max-height');
      } else {
        faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
      }
    });
    const faqAnswer = [...row.children][1];
    faqAnswer.classList.add('faq-answer');
  });
}
