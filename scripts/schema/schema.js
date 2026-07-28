import { productSchemas } from './product-schema.js';
import { videoSchemas } from './video-schema.js';
import { breadcrumbSchemas } from './breadcrumb-schema.js';
import { eventSchemas } from './event-schema.js';

const path = window.location.pathname.replace(/\/$/, '') || '/';

function injectSchema(schema, id) {
  if (!schema || document.querySelector(`script[data-schema="${id}"]`)) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', id);
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Website Schema (Homepage Only)
if (path === '/') {
  injectSchema({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aldevron',
    url: 'https://www.aldevron.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.aldevron.com/search#q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }, 'website');
}

// Product / CollectionPage Schema
injectSchema(productSchemas[path], 'product');

// Video Schema
injectSchema(videoSchemas[path], 'video');
// event Schema
injectSchema(eventSchemas[path], 'event');

// Breadcrumb Schema
injectSchema(breadcrumbSchemas[path], 'breadcrumb');
