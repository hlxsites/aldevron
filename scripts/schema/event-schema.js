// ==========================================================
// EVENT SCHEMAS
// ==========================================================
const EVENT_SCHEMAS = {
  '/about-us/events/car-tcr-summit-us-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/car-tcr-summit-us-2026#event',
    name: 'CAR-TCR Summit US 2026',
    description:
      'Meet Aldevron at the CAR-TCR Summit US 2026 to explore solutions for cell and gene therapy development, including plasmid DNA, mRNA manufacturing, gene editing and viral vector technologies. Connect with our experts to discuss your program and schedule a meeting during the event.',
    url: 'https://www.aldevron.com/about-us/events/car-tcr-summit-us-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: '2026-09-15',
    endDate: '2026-09-17',
    eventType: 'Conference',
    location: {
      '@type': 'Place',
      name: 'The Westin Boston Seaport District',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '425 Summer St',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        postalCode: '02210',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Hanson Wade',
      url: 'https://car-tcr-summit.com',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Cell and Gene Therapy Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/car-tcr-summit-us-2026',
      availability: 'https://schema.org/InStock',
    },
  },
  '/about-us/events/genome-editing-summit-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/genome-editing-summit-2026#event',
    name: 'Genome Editing Summit 2026',
    description:
      'Meet Aldevron at Genome Editing Summit 2026 to discover integrated solutions for CRISPR gene editing, plasmid DNA manufacturing, mRNA production, guide RNA, and genomic medicine. Connect with our scientific experts to discuss your research and clinical development programs.',
    url: 'https://www.aldevron.com/about-us/events/genome-editing-summit-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: '2026-09-28',
    endDate: '2026-09-30',
    eventType: 'Conference',
    location: {
      '@type': 'Place',
      name: 'Hilton Boston Logan Airport',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'One Hotel Drive',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        postalCode: '02128',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Hanson Wade',
      url: 'https://genome-editing-therapeutics-summit.com',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Cell and Gene Therapy Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/genome-editing-summit-2026',
      availability: 'https://schema.org/InStock',
    },
  },

  '/about-us/events/mrna-process-development-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/mrna-process-development-2026#event',
    name: 'mRNA Process Development & CMC Summit 2026',
    description:
      'Meet Aldevron at the mRNA Process Development & CMC Summit 2026 to explore the latest advances in mRNA process development, CMC, manufacturing, and RNA therapeutics. Connect with our experts to discuss scalable mRNA solutions, drug substance manufacturing, and end-to-end development strategies.',
    url: 'https://www.aldevron.com/about-us/events/mrna-process-development-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: '2026-09-29',
    endDate: '2026-10-01',
    eventType: 'Conference',
    location: {
      '@type': 'Place',
      name: 'Boston, Massachusetts',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Hanson Wade',
      url: 'https://mrna-processandcmc.com',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Biopharmaceutical and mRNA Therapeutics Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/mrna-process-development-2026',
      availability: 'https://schema.org/InStock',
    },
  },
  '/about-us/events/meeting-on-mesa-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/meeting-on-mesa-2026#event',
    name: 'Meeting on the Mesa 2026',
    description:
      'Meet Aldevron at Meeting on the Mesa 2026 to discuss plasmid DNA, mRNA, gene editing, protein production, and custom manufacturing solutions that accelerate cell and gene therapy development from research through commercialization.',
    url: 'https://www.aldevron.com/about-us/events/meeting-on-mesa-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    eventType: 'Conference',
    startDate: '2026-10-05',
    endDate: '2026-10-07',
    location: {
      '@type': 'Place',
      name: 'Town and Country Resort',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '500 Hotel Circle North',
        addressLocality: 'San Diego',
        addressRegion: 'CA',
        postalCode: '92108',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Biocom California',
      url: 'https://meetingonthemesa.com',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Biotechnology and Cell & Gene Therapy Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/meeting-on-mesa-2026',
      availability: 'https://schema.org/InStock',
    },
  },

  '/about-us/events/esgct-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/esgct-2026#event',
    name: 'ESGCT Annual Congress 2026',
    description:
      'Meet Aldevron at the ESGCT Annual Congress 2026 to learn about integrated solutions for gene and cell therapy development, including plasmid DNA, mRNA, proteins, gene editing reagents and custom manufacturing services. Connect with our experts to discuss your research and clinical development programs.',
    url: 'https://www.aldevron.com/about-us/events/esgct-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    eventType: 'Conference',
    startDate: '2026-10-20',
    endDate: '2026-10-23',
    location: {
      '@type': 'Place',
      name: 'Palau de Congressos de Catalunya',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Diagonal, 661-671',
        addressLocality: 'Barcelona',
        postalCode: '08028',
        addressCountry: 'ES',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'European Society of Gene and Cell Therapy',
      url: 'https://www.esgct.eu',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Gene and Cell Therapy Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/esgct-2026',
      availability: 'https://schema.org/InStock',
    },
  },

  '/about-us/events/amm-ascent-alliance-mrna-medicine-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/amm-ascent-alliance-mrna-medicine-2026#event',
    name: 'AMM ASCENT – Alliance for mRNA Medicines Annual Meeting 2026',
    description:
      'Meet Aldevron at the AMM ASCENT 2026 Annual Meeting to discuss advancements in mRNA therapeutics, vaccines, manufacturing, and commercialization. Connect with our experts to explore scalable mRNA solutions, plasmid DNA, and integrated development services supporting research through commercial manufacturing.',
    url: 'https://www.aldevron.com/about-us/events/amm-ascent-alliance-mrna-medicine-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    eventType: 'Conference',
    startDate: '2026-10-28',
    endDate: '2026-10-30',
    location: {
      '@type': 'Place',
      name: 'Coronado Island Marriott Resort & Spa',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2000 2nd Street',
        addressLocality: 'Coronado',
        addressRegion: 'CA',
        postalCode: '92118',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Alliance for mRNA Medicines',
      url: 'https://mrnamedicines.org',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'mRNA Therapeutics, Biotechnology and Pharmaceutical Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/amm-ascent-alliance-mrna-medicine-2026',
      availability: 'https://schema.org/InStock',
    },
  },

  '/about-us/events/international-mrna-health-2026': {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://www.aldevron.com/about-us/events/international-mrna-health-2026#event',
    name: 'International mRNA Health Conference 2026',
    description:
      'Meet Aldevron at the International mRNA Health Conference 2026 to explore the latest advances in mRNA therapeutics, vaccine development, process optimization, and manufacturing. Connect with our experts to discuss scalable solutions for plasmid DNA, mRNA drug substance and drug product manufacturing, and integrated development services.',
    url: 'https://www.aldevron.com/about-us/events/international-mrna-health-2026',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    eventType: 'Conference',
    startDate: '2026-11-17',
    endDate: '2026-11-19',
    location: {
      '@type': 'Place',
      name: 'The Westin Copley Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10 Huntington Avenue',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        postalCode: '02116',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'International mRNA Health Conference',
      url: 'https://mrna-conference.com',
    },
    performer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'mRNA Therapeutics, Biotechnology and Pharmaceutical Professionals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.aldevron.com/about-us/events/international-mrna-health-2026',
      availability: 'https://schema.org/InStock',
    },
  },
};

// ==========================================================
// LOAD EVENT SCHEMA
// ==========================================================

function loadEventSchema() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  const schema = EVENT_SCHEMAS[path];

  if (!schema) return;

  if (document.querySelector('script[data-event-schema]')) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-event-schema', 'true');
  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);
}

loadEventSchema();
