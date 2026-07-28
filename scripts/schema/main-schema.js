import PRODUCT_SCHEMAS from './product-schema.js';
import VIDEO_SCHEMAS from './video-schema.js';
import EVENT_SCHEMAS from './event-schema.js';
import BREADCRUMB_SCHEMAS from './breadcrumb-schema.js';

// Normalize URL
const path = window.location.pathname
  .replace(/\/$/, '')
  .replace(/\.html$/, '') || '/';

function injectSchema(schema, id) {
  if (!schema) return;

  if (document.querySelector(`script[data-schema="${id}"]`)) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.schema = id;
  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);
}

// Website Schema (Homepage)
if (path === '/') {
  injectSchema(
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aldevron',
      url: 'https://www.aldevron.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.aldevron.com/search#q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    'website',
  );
}

// Product Schema
injectSchema(PRODUCT_SCHEMAS[path], 'product');

// Video Schema
injectSchema(VIDEO_SCHEMAS[path], 'video');

// Event Schema
injectSchema(EVENT_SCHEMAS[path], 'event');

// Breadcrumb Schema
injectSchema(BREADCRUMB_SCHEMAS[path], 'breadcrumb');
