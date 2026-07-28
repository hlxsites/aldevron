// ==========================================================
// PRODUCT & COLLECTION PAGE SCHEMAS
// ==========================================================
const PRODUCT_SCHEMAS = {
  '/catalog-products/nucleases': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/nucleases#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/nucleases',
    name: 'Gene Editing Enzymes | CRISPR Nucleases',
    description:
      "Browse Aldevron's catalog of CRISPR nucleases for research and clinical applications, including Eureca-V™, SpyFi™ Cas9, SpCas9, AsCas12a and SaCas9.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'CRISPR Nuclease Catalog',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/eureca-v-nuclease',
          item: {
            '@type': 'Product',
            name: 'Eureca-V™ Nuclease',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease',
          item: {
            '@type': 'Product',
            name: 'SpyFi™ Cas9 Nuclease',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9',
          item: {
            '@type': 'Product',
            name: 'SpCas9 Nuclease',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/ascas12a',
          item: {
            '@type': 'Product',
            name: 'AsCas12a Nuclease',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/sacas9',
          item: {
            '@type': 'Product',
            name: 'SaCas9 Nuclease',
          },
        },
      ],
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
  },

  '/catalog-products/crispr-nucleases/eureca-v-nuclease': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/crispr-nucleases/eureca-v-nuclease#product',
    name: 'Eureca-V™ Nuclease',
    description:
      'Eureca-V™ Nuclease is a Class 2, Type V CRISPR-Cas nuclease based on the proprietary MAD7® nuclease developed by Inscripta®. It targets T-rich PAM domains and is available in research grade with custom cGMP manufacturing options.',
    url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/eureca-v-nuclease',
    sku: '9300',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'CRISPR Nucleases',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'CRISPR Type',
        value: 'Class 2, Type V',
      },
      {
        '@type': 'PropertyValue',
        name: 'Technology',
        value: 'MAD7®',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Genome Editing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Research Grade',
        value: 'Available',
      },
      {
        '@type': 'PropertyValue',
        name: 'cGMP',
        value: 'Custom Manufacturing Available',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '9300-0.25MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/eureca-vtm-nuclease-0-25-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9300-1MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/eureca-vtm-nuclease-1-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9300-5MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/eureca-vtm-nuclease-5-mg.html',
      },
    ],
  },
  '/catalog-products/crispr-nucleases/spyfi-nuclease': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease#product',
    name: 'SpyFi™ Cas9 Nuclease',
    description:
      'SpyFi™ Cas9 Nuclease is a high-fidelity CRISPR-Cas9 nuclease engineered to deliver reduced off-target activity while maintaining high on-target editing efficiency. Available in Research Grade, GMP-Source™ and cGMP quality for applications ranging from research to clinical development.',
    url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease',
    sku: '9214',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'CRISPR Nucleases',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'CRISPR Type',
        value: 'Cas9',
      },
      {
        '@type': 'PropertyValue',
        name: 'Variant',
        value: 'SpyFi™ High-Fidelity Cas9',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Genome Editing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Levels',
        value: 'Research Grade, GMP-Source™, cGMP',
      },
      {
        '@type': 'PropertyValue',
        name: 'Concentration',
        value: '10 mg/mL',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Reduced off-target activity with high on-target editing efficiency',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '9214-0.25MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/spyfi-cas9-nuclease-0-25-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9214-5MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/spyfi-cas9-nuclease-5-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9216-0.1ML',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease',
      },
      {
        '@type': 'Offer',
        sku: '9216-1ML',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease',
      },
    ],
  },

  '/catalog-products/crispr-nucleases/spcas9': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9#product',
    name: 'sNLS-SpCas9-sNLS Nuclease',
    alternateName: 'SpCas9 Nuclease',
    description:
      'sNLS-SpCas9-sNLS Nuclease is a wild-type CRISPR-Cas9 nuclease available in Research Grade and cGMP quality. It is designed for genome editing applications and provides consistent activity, high purity, and reliable performance from research through clinical development.',
    url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9',
    image: 'https://www.aldevron.com/path-to-product-image.jpg',
    sku: '9212',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'CRISPR Nucleases',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'CRISPR Type',
        value: 'Cas9',
      },
      {
        '@type': 'PropertyValue',
        name: 'Variant',
        value: 'Wild-type SpCas9',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Genome Editing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Levels',
        value: 'Research Grade, cGMP',
      },
      {
        '@type': 'PropertyValue',
        name: 'Concentration',
        value: '10 mg/mL',
      },
      {
        '@type': 'PropertyValue',
        name: 'Purity',
        value: '≥95%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Consistent activity and purity across research and cGMP manufacturing',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '9212-0.25MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/spcas9-nuclease-0.25-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9212-5MG',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/spcas9-nuclease-5-mg.html',
      },
      {
        '@type': 'Offer',
        sku: '9211-0.1ML',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9',
      },
      {
        '@type': 'Offer',
        sku: '9211-1ML',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9',
      },
    ],
  },
  '/catalog-products/ivt-enzymes': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/ivt-enzymes#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/ivt-enzymes',
    name: 'In Vitro Transcription & Capping Enzymes',
    description:
      "Explore Aldevron's portfolio of in vitro transcription (IVT) and capping enzymes, including engineered Codex® HiCap RNA Polymerase and wild-type IVT & capping enzymes for research, clinical development and commercial manufacturing.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'IVT & Capping Enzyme Products',
      numberOfItems: 2,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase',
          item: {
            '@type': 'Product',
            name: 'Codex® HiCap RNA Polymerase',
            category: 'Engineered IVT Enzyme',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes',
          item: {
            '@type': 'Product',
            name: 'Wild-type IVT & Capping Enzymes',
            category: 'IVT & Capping Enzyme Collection',
          },
        },
      ],
    },
  },
  '/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase#product',
    name: 'Codex® HiCap RNA T7 Polymerase',
    alternateName: 'Codex® HiCap RNA Polymerase',
    description:
      'Codex® HiCap RNA T7 Polymerase is an engineered co-transcriptional capping RNA polymerase designed for in vitro transcription (IVT). It produces synthetic RNA with reduced double-stranded RNA (dsRNA) byproducts, improved capping efficiency, and high RNA yield for research and clinical manufacturing.',
    url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase',
    image: 'https://www.aldevron.com/path-to-product-image.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'In Vitro Transcription (IVT) Enzymes',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Enzyme Type',
        value: 'Engineered T7 RNA Polymerase',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'In Vitro Transcription (IVT)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Primary Use',
        value: 'Synthetic mRNA Production',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Reduced double-stranded RNA (dsRNA) byproducts',
      },
      {
        '@type': 'PropertyValue',
        name: 'Capping Efficiency',
        value: 'Efficient co-transcriptional incorporation of commercially available cap analogs',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Grades',
        value: 'Research Grade and GMP-Grade',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing',
        value: 'Supports research, clinical and commercial RNA production',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '9145-250uL',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/codexr-hicap-rna-polymerase-250-ul.html',
      },
      {
        '@type': 'Offer',
        sku: '9145-1mL',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/codexr-hicap-rna-polymerase-1-ml.html',
      },
      {
        '@type': 'Offer',
        sku: '9145-10mL',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/codexr-hicap-rna-polymerase-10-ml.html',
      },
      {
        '@type': 'Offer',
        sku: '9618-1mL',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase',
      },
      {
        '@type': 'Offer',
        sku: '9618-10mL',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase',
      },
    ],
  },
  '/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes',
    name: 'Wild-type IVT & Capping Enzymes',
    description:
      "Browse Aldevron's portfolio of wild-type in vitro transcription (IVT) and capping enzymes for mRNA production, including transcription, capping and tailing enzymes available in research-grade and custom manufacturing formats.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Wild-type IVT & Capping Enzymes',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'T7 RNA Polymerase',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Guanylyltransferase',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: "2'-O-Methyltransferase",
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'Poly(A) Polymerase',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Product',
            name: 'Ribonuclease Inhibitor',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Product',
            name: 'DNase I',
          },
        },
        {
          '@type': 'ListItem',
          position: 7,
          item: {
            '@type': 'Product',
            name: 'Inorganic Pyrophosphatase',
          },
        },
      ],
    },
  },
  '/catalog-products/viral-vector-plasmids/pald-aav': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
    name: 'pALD-AAV System',
    description:
      'The pALD-AAV System is a collection of royalty-free plasmids and cloning vectors for recombinant AAV manufacturing, including helper plasmids, Rep/Cap plasmids and transgene cloning vectors for research, GMP-Source™ and cGMP applications.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'pALD-AAV System Products',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-x80',
          item: {
            '@type': 'Product',
            name: 'pALD-X80 Helper Plasmid',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-help',
          item: {
            '@type': 'Product',
            name: 'pALD-HELP Helper Plasmid',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids',
          item: {
            '@type': 'Product',
            name: 'pALD-AAV2 Rep/Cap Plasmid',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids',
          item: {
            '@type': 'Product',
            name: 'pALD-AAV5 Rep/Cap Plasmid',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids',
          item: {
            '@type': 'Product',
            name: 'pALD-AAV6 Rep/Cap Plasmid',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Product',
            name: 'pALD-ITR-WPRE-GFP Cloning Vector',
          },
        },
        {
          '@type': 'ListItem',
          position: 7,
          item: {
            '@type': 'Product',
            name: 'pALD-ITR-GFP Cloning Vector',
          },
        },
      ],
    },
  },
  '/catalog-products/viral-vector-plasmids/pald-aav/pald-x80': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-x80#product',
    name: 'pALD-X80 Helper Plasmid',
    alternateName: 'pALD-X80',
    description:
      'pALD-X80 is a royalty-free recombinant AAV helper plasmid designed for viral vector manufacturing. It is immediately available in Research Grade, GMP-Source® and cGMP quality, offering a reliable and standardized solution for recombinant AAV production from research through commercial manufacturing.',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-x80',
    sku: '5017-10',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'Viral Vector Plasmids',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Product Type',
        value: 'Helper Plasmid',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Recombinant AAV (rAAV) Manufacturing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Pack Size',
        value: '10 mg',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Levels',
        value: 'Research Grade, GMP-Source®, cGMP',
      },
      {
        '@type': 'PropertyValue',
        name: 'Antibiotic Resistance',
        value: 'Kanamycin',
      },
      {
        '@type': 'PropertyValue',
        name: 'Royalty Status',
        value: 'Royalty-free for research through commercial applications',
      },
      {
        '@type': 'PropertyValue',
        name: 'Drug Master File',
        value: 'US FDA Drug Master File Available',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Standardized helper plasmid for consistent and scalable rAAV production',
      },
    ],
    offers: {
      '@type': 'Offer',
      sku: '5017-10',
      price: '1170.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.aldevron.com/pald-x80-aav-helper-plasmid.html',
    },
  },
  '/catalog-products/viral-vector-plasmids/pald-aav/pald-itr': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-itr#product',
    name: 'pALD-ITR Cloning Vector',
    alternateName: 'pALD-ITR',
    description:
      'pALD-ITR Cloning Vector is a royalty-free recombinant AAV transgene cloning vector designed for efficient viral vector development and manufacturing. The vector features stabilized inverted terminal repeats (ITRs) and is available for research applications with GMP manufacturing support.',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-itr',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'Viral Vector Plasmids',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Product Type',
        value: 'AAV Transgene Cloning Vector',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Recombinant AAV Manufacturing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Vector Feature',
        value: 'Stabilized Inverted Terminal Repeats (ITRs)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Antibiotic Resistance',
        value: 'Kanamycin',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Levels',
        value: 'Research Grade, GMP-Source®, cGMP',
      },
      {
        '@type': 'PropertyValue',
        name: 'Royalty Status',
        value: 'Royalty-free for research through commercial applications',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Optimized cloning vector for reliable and scalable rAAV production',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '5062-10',
        price: '1170.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/pald-itr-gfp-rg-10mg.html',
      },
      {
        '@type': 'Offer',
        sku: '5069-10',
        price: '1170.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/pald-itr-wpre-gfp-rg-10mg.html',
      },
    ],
  },
  '/catalog-products/viral-vector-plasmids/pald-aav/pald-help': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-help#product',
    name: 'pALD-HELP Helper Plasmid',
    alternateName: 'pALD-HELP',
    description:
      'pALD-HELP is a royalty-free recombinant AAV helper plasmid for viral vector manufacturing. It provides adenoviral helper genes required for triple transfection workflows and is available in Research Grade, GMP-Source® and cGMP quality for research through commercial manufacturing.',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-help',
    sku: '5082-10',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'Viral Vector Plasmids',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Product Type',
        value: 'Helper Plasmid',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'Recombinant AAV (rAAV) Manufacturing',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing Method',
        value: 'Triple Transfection',
      },
      {
        '@type': 'PropertyValue',
        name: 'Antibiotic Resistance',
        value: 'Kanamycin',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quality Levels',
        value: 'Research Grade, GMP-Source®, cGMP',
      },
      {
        '@type': 'PropertyValue',
        name: 'Royalty Status',
        value: 'Royalty-free for research through commercial applications',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Feature',
        value: 'Hexon/Fiber coding sequence removed',
      },
      {
        '@type': 'PropertyValue',
        name: 'Key Benefit',
        value: 'Provides a standardized, in-stock helper plasmid for reliable rAAV production',
      },
    ],
    offers: {
      '@type': 'Offer',
      sku: '5082-10',
      price: '485.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.aldevron.com/pald-help-rg-10mg.html',
    },
  },
  '/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids',
    name: 'pALD-AAV Rep/Cap Plasmids',
    description:
      "Aldevron's pALD-AAV Rep/Cap plasmids are royalty-free packaging plasmids for recombinant AAV manufacturing. The collection includes pALD-AAV2, pALD-AAV5 and pALD-AAV6 plasmids, available in Research Grade with GMP manufacturing options.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'pALD-AAV Rep/Cap Plasmids',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-AAV2 Rep/Cap Plasmid',
            sku: '5057-10',
            url: 'https://store.aldevron.com/pald-aav2-rg-10mg.html',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-AAV5 Rep/Cap Plasmid',
            sku: '5058-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'pALD-AAV6 Rep/Cap Plasmid',
            sku: '5059-10',
          },
        },
      ],
    },
  },
  '/catalog-products/viral-vector-plasmids/pald-lenti': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-lenti#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-lenti',
    name: 'pALD-Lenti System',
    description:
      'The pALD-Lenti System is a collection of lentiviral packaging plasmids for lentiviral vector production. The system includes expression, envelope, packaging and Rev plasmids, available in Research Grade, GMP-Source™ and cGMP quality for research through commercial manufacturing.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'pALD-Lenti Plasmids',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-LentiEGFP-K',
            sku: '5030-10',
            url: 'https://store.aldevron.com/pald-lentiegfp-k-rg-10mg.html',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-VSV-G-K',
            sku: '5036-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'pALD-GagPol-K',
            sku: '5034-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'pALD-Rev-K',
            sku: '5032-10',
          },
        },
      ],
    },
  },
  '/catalog-products/cloning-backbones/pald-cv42-cv77-dna': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-cv42-cv77-dna#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-cv42-cv77-dna',
    name: 'pALD-CV42 & pALD-CV77 DNA Cloning Backbones',
    description:
      "Aldevron's pALD-CV42 and pALD-CV77 DNA cloning backbones are royalty-free plasmid vectors designed for flexible DNA cloning and gene expression applications. These standardized backbones are available for research use and can support custom manufacturing projects.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'DNA Cloning Backbones',
      numberOfItems: 2,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-CV42 DNA Cloning Backbone',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-CV77 DNA Cloning Backbone',
          },
        },
      ],
    },
  },
  '/catalog-products/cloning-backbones/pald-utr-rna': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-utr-rna#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-utr-rna',
    name: 'RNA Cloning Backbones',
    description:
      "Aldevron's RNA cloning backbones are optimized for mRNA production and include proprietary 5′ UTR constructs and RNA-ready cloning vectors with T7 promoter and optional poly(A) sequences for vaccine and therapeutic development.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'RNA Cloning Backbone Products',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-UTR Backbone Option 1',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-UTR Backbone Option 2',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'pALD-CV42 [T7]',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'pALD-CV42 [T7-Poly(A)]',
          },
        },
      ],
    },
  },
  '/catalog-products/reporters/dasher-gfp-mrna': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.aldevron.com/catalog-products/reporters/dasher-gfp-mrna#product',
    name: 'DasherGFP® mRNA',
    alternateName: 'Dasher GFP mRNA',
    description:
      'DasherGFP® mRNA is a royalty-free mRNA reporter encoding a fluorescent green protein optimized for expression in mammalian cells. The product features a 5′ Cap 1 structure and 3′ poly(A) tail for rapid transient expression, making it ideal for monitoring mRNA transfection efficiency and protein expression.',
    url: 'https://www.aldevron.com/catalog-products/reporters/dasher-gfp-mrna',
    brand: {
      '@type': 'Brand',
      name: 'Aldevron',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
      name: 'Aldevron',
      url: 'https://www.aldevron.com',
    },
    category: 'RNA Reporters',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Product Type',
        value: 'mRNA Reporter',
      },
      {
        '@type': 'PropertyValue',
        name: 'Reporter Protein',
        value: 'DasherGFP®',
      },
      {
        '@type': 'PropertyValue',
        name: 'Application',
        value: 'mRNA Transfection and Gene Expression Studies',
      },
      {
        '@type': 'PropertyValue',
        name: '5′ Structure',
        value: 'Cap 1',
      },
      {
        '@type': 'PropertyValue',
        name: '3′ Structure',
        value: 'Poly(A) Tail',
      },
      {
        '@type': 'PropertyValue',
        name: 'Expression Host',
        value: 'Mammalian Cells',
      },
      {
        '@type': 'PropertyValue',
        name: 'Protein Size',
        value: '26.6 kDa (237 amino acids)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Excitation Maximum',
        value: '505 nm',
      },
      {
        '@type': 'PropertyValue',
        name: 'Emission Maximum',
        value: '525 nm',
      },
      {
        '@type': 'PropertyValue',
        name: 'Research License',
        value: 'Royalty-free for non-clinical research use',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        sku: '3870-0200',
        price: '482.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/dashergfp-mrna-rg-200ug.html',
      },
      {
        '@type': 'Offer',
        sku: '3870-1000',
        price: '1715.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://store.aldevron.com/dashergfp-mrna-rg-1mg.html',
      },
    ],
  },
  '/catalog-products/reporters/viral-vector-transgene-reporters': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/reporters/viral-vector-transgene-reporters#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/reporters/viral-vector-transgene-reporters',
    name: 'Viral Vector Transgene Reporters',
    description:
      "Aldevron's viral vector transgene reporters include standardized AAV and lentiviral reporter plasmids for evaluating viral vector production and transgene expression. Products include pALD-ITR-GFP, pALD-ITR-WPRE-GFP and pALD-LentiEGFP-K reporter constructs for research applications.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Viral Vector Reporter Products',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-ITR-GFP Reporter',
            sku: '5062-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-ITR-WPRE-GFP Reporter',
            sku: '5069-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'pALD-LentiEGFP-K Reporter',
            sku: '5030-5 / 5030-10',
          },
        },
      ],
    },
  },
  '/catalog-products/reporters/traditional-pdna-reporters': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/reporters/traditional-pdna-reporters#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/reporters/traditional-pdna-reporters',
    name: 'Traditional Plasmid DNA Reporters',
    description:
      "Aldevron's traditional plasmid DNA reporters include pALD-CV77-Luciferase and gWiz™ reporter plasmids for in vitro and in vivo gene expression studies. These reporter constructs are available in multiple research-grade formats for transfection and expression analysis.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Traditional Plasmid DNA Reporter Products',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-CV77-Luciferase Reporter',
            sku: '5078-5 / 5078-10',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'gWiz™ GFP Reporter',
            sku: '5006 / 5007',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'gWiz™ Luciferase Reporter',
            sku: '5000 / 5001',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'gWiz™ Blank Reporter',
            sku: '5008 / 5009',
          },
        },
      ],
    },
  },
  '/catalog-products/reporters/nanoplasmid-reporter-constructs': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.aldevron.com/catalog-products/reporters/nanoplasmid-reporter-constructs#collectionpage',
    url: 'https://www.aldevron.com/catalog-products/reporters/nanoplasmid-reporter-constructs',
    name: 'Nanoplasmid™ Reporter Constructs',
    description:
      "Aldevron's Nanoplasmid™ Reporter Constructs include next-generation plasmid vectors available with multiple promoter and reporter combinations for gene expression, transfection and cell therapy research applications.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aldevron.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.aldevron.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Nanoplasmid™ Reporter Constructs',
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-CMV-eGFP',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-CMV-Luc',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-CAG-eGFP',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-CAG-Luc',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-EF1α(Intron)-eGFP',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-EF1α(Intron)-Luc',
          },
        },
        {
          '@type': 'ListItem',
          position: 7,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-EF1S-eGFP',
          },
        },
        {
          '@type': 'ListItem',
          position: 8,
          item: {
            '@type': 'Product',
            name: 'pALD-Nanoplasmid-EF1S-Luc',
          },
        },
      ],
    },
  },
};
export default PRODUCT_SCHEMAS;
