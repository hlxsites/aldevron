// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import { buildForm } from '../blocks/forms/forms.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// google tag manager -start
function loadGTM() {
  const scriptTag = document.createElement('script');
  scriptTag.innerHTML = `
        let gtmId = 'GTM-MLWV3QQ';
        // googleTagManager
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtmId);
        `;
  document.head.prepend(scriptTag);
}
// google tag manager -end

if (
  !window.location.hostname.includes('localhost')
    && !document.location.hostname.includes('.hlx.page')
) {
  loadGTM();
}

function loadHubSpot() {
  const hsScriptEl = document.createElement('script');
  hsScriptEl.type = 'text/javascript';
  hsScriptEl.async = true;
  hsScriptEl.defer = true;
  hsScriptEl.setAttribute('id', 'hs-script-loader');
  hsScriptEl.src = '//js.hsforms.net/forms/v2.js';
  document.querySelector('head').append(hsScriptEl);
  hsScriptEl.addEventListener('load', () => {
        buildForm(hbspt); // eslint-disable-line
  });
}

loadHubSpot();
