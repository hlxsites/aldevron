function embedHubSpotForm(formFields) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/scripts/v2.js';
  script.charset = 'utf-8';
  script.setAttribute('async', '');
  script.onload = () => {
    window.hbspt.forms.create(formFields);
  };
  document.head.appendChild(script);
}

export default function decorate(block) {
  const formDetails = {};
  const tableRows = block.querySelectorAll('tr');
  tableRows.forEach((row) => {
    const cells = row.children;
    if (cells.length >= 2) {
      const key = cells[0].innerText.trim();
      const value = cells[1].innerText.trim();
      formDetails[key] = key === 'target' ? `#${value}` : value;
    }
  });
  embedHubSpotForm(formDetails);
  const form = document.createElement('div');
  form.id = formDetails.target.replace('#', '');
  form.classList.add('content', 'outer');
  block.textContent = '';
  block.append(form);
}
