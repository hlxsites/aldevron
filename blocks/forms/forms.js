import { readBlockConfig } from '../../scripts/aem.js';

let formConfig = {};

export default function decorate(block) {
  formConfig = readBlockConfig(block);
  const form = document.createElement('div');
  form.id = formConfig.target;
  form.classList.add('content', 'outer');
  block.textContent = '';
  block.append(form);
}

export function isForm() {
  return !!formConfig.target;
}

export function buildForm(hbspt) {
  hbspt.forms.create({
    region: formConfig.region,
    portalId: formConfig.portalid,
    formId: formConfig.formid,
    target: `#${formConfig.target}`,
  });
}
