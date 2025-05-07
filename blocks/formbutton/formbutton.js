import { passFormConfig, extractTableData } from '../../scripts/aem.js';
import { div } from '../../scripts/dom-builder.js';
let formConfig = {};
export default async function decorate(block) {
  const table = block.querySelector('table');
  formConfig = await extractTableData(table);
  passFormConfig(formConfig);
  const { buttonlabel: buttonLabel, target: targetId } = formConfig;
  if (!buttonLabel || !targetId)
  {     
     block.style.display = 'none';
    return;
  }
  // Create form container and overlay
  const formbutton = div({ class: 'modal-form content' });
  formbutton.id = targetId;
  const modalOverlay = div({ class: 'modal-overlay' });
  const loading = div({ class: 'modal-loading' });
  loading.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(modalOverlay);
  document.body.appendChild(loading);
  document.body.appendChild(formbutton);
  if (table) table.remove();
  const ctaButtons = block.querySelectorAll('.cta-button');
  if (!ctaButtons.length) {
    const fallbackButton = document.createElement('button');
    fallbackButton.innerText = buttonLabel;
    fallbackButton.classList.add('cta-button');
    block.appendChild(fallbackButton);
  }
  block.querySelectorAll('.cta-button').forEach((btn) => {
    btn.addEventListener('click', async () => {
      loading.classList.add('active');
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.classList.remove('active');
      formbutton.classList.add('active');
      modalOverlay.classList.add('active');
    });
  });
  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    formbutton.classList.remove('active');
  });
}