import { passFormConfig, extractTableData } from '../../scripts/aem.js';
 
let formConfig = {};
 
export default async function decorate(block) {
  const hubspotForm = document.getElementById('Services-hubspot-form');
  if (hubspotForm) {
    hubspotForm.style.backgroundColor = 'white';
    hubspotForm.style.marginRight = '20px';
  }
  const table = block.querySelector('table');
  formConfig = await extractTableData(table);
  const formbutton = document.createElement('div');
  formbutton.id = formConfig.target;
  const buttonLabel = formConfig.buttonlabel;
  console.log(buttonLabel);
  formbutton.classList.add('content');
  formbutton.style.display = 'none';
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  modalOverlay.style.display = 'none';
  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100%';
  modalOverlay.style.height = '100%';
  modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  modalOverlay.style.zIndex = '999';
  const ctaButton = document.createElement('button');
  ctaButton.innerText = buttonLabel;
  ctaButton.style.backgroundColor = 'black';
  ctaButton.style.color = 'white';
  ctaButton.style.padding = '10px 20px';
  ctaButton.style.border = 'none';
  ctaButton.style.borderRadius = '5px';
  ctaButton.style.cursor = 'pointer';
  ctaButton.style.fontSize = '16px';
  block.appendChild(ctaButton);
  document.body.appendChild(modalOverlay);
  document.body.appendChild(formbutton);
  ctaButton.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
  formbutton.style.display = 'block';
  });
 
  modalOverlay.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    formbutton.style.display = 'none';
  });
 
  if (table) {
    table.replaceWith(formbutton);
  }
 
  passFormConfig(formConfig);
 
  formbutton.style.position = 'fixed';
  formbutton.style.top = '50%';
  formbutton.style.left = '50%';
  formbutton.style.transform = 'translate(-50%, -50%)';
  formbutton.style.backgroundColor = '#E5E4E2';
  formbutton.style.padding = '20px';
  formbutton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  formbutton.style.borderRadius = '8px';
  formbutton.style.zIndex = '1000';
  formbutton.style.maxHeight = '80vh';
  formbutton.style.overflowY = 'auto';
  formbutton.style.width = '40%';
  const screenWidth = window.innerWidth;
 
  if (screenWidth < 600) {
    formbutton.style.width = '80%';
  } else if (screenWidth >= 600 && screenWidth <= 1024) {
    formbutton.style.width = '60%';
  } else {
    formbutton.style.width = '40%';
  }
 
  window.addEventListener('resize', () => {
    const newScreenWidth = window.innerWidth;
 
    if (newScreenWidth < 600) {
      formbutton.style.width = '80%';
    } else if (newScreenWidth >= 600 && newScreenWidth <= 1024) {
      formbutton.style.width = '60%';
    } else {
      formbutton.style.width = '40%';
    }
  });
  formbutton.style.margin = '20px';
  formbutton.style.boxSizing = 'border-box';
  document.getElementById("Services-hubspot-form").style.border = "12px solid white";
 
}