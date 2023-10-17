export default function decorate(block) {
  const faqRows = [...block.children];
  block.classList.add('faq-accordion');

  faqRows.forEach((row) => {
    const faqQuestion = [...row.children][0];
    const faqAnswer = [...row.children][1];

    faqQuestion.classList.add('faq-question');
    faqAnswer.classList.add('faq-answer');

    faqQuestion.addEventListener('click', () => {
      const isActive = faqQuestion.classList.contains('active');

      if (isActive) {
        faqQuestion.classList.remove('active');
        faqAnswer.classList.remove('active');
        // Set max-height to 0 for smooth closing
        faqAnswer.style.maxHeight = '0';
      } else {
        faqQuestion.classList.add('active');
        faqAnswer.classList.add('active');
        // Set max-height to scrollHeight for smooth opening
        faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
      }
    });

    // Close all accordions initially
    faqQuestion.classList.remove('active');
    faqAnswer.classList.remove('active');
    faqAnswer.style.maxHeight = '0';
  });
}
