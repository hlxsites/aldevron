// modalities pages schemas

function loadSchema() {
  // Normalize the current path
  let path = window.location.pathname
    .replace(/\/$/, '') // remove trailing slash
    .replace(/\.html$/, ''); // remove .html if present

  if (path === '') {
    path = '/';
  }

  let schemaData = null;

  // Existing Breadcrumb Schema

  if (path === '/modalities/gene-therapy') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Modalities',
          item: 'https://www.aldevron.com/modalities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene Therapy',
          item: 'https://www.aldevron.com/modalities/gene-therapy',
        },
      ],
    };
  } else if (path === '/modalities/gene-therapy/viral-gene-therapy') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Modalities',
          item: 'https://www.aldevron.com/modalities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene Therapy',
          item: 'https://www.aldevron.com/modalities/gene-therapy',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Viral Gene Therapy',
          item: 'https://www.aldevron.com/modalities/gene-therapy/viral-gene-therapy',
        },
      ],
    };
  } else if (path === '/modalities/gene-therapy/non-viral-gene-therapy') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Modalities',
          item: 'https://www.aldevron.com/modalities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene Therapy',
          item: 'https://www.aldevron.com/modalities/gene-therapy',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Non-Viral Gene Therapy',
          item: 'https://www.aldevron.com/modalities/gene-therapy/non-viral-gene-therapy',
        },
      ],
    };
  } else if (path === '/modalities/gene-modified-cell-therapy') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Modalities',
          item: 'https://www.aldevron.com/modalities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene-Modified Cell Therapy',
          item: 'https://www.aldevron.com/modalities/gene-modified-cell-therapy',
        },
      ],
    };
  } else if (path === '/modalities/gene-editing') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Modalities',
          item: 'https://www.aldevron.com/modalities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene Editing',
          item: 'https://www.aldevron.com/modalities/gene-editing',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/traditional-plasmid-dna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Traditional Plasmid DNA',
          item: 'https://www.aldevron.com/custom-manufacturing/traditional-plasmid-dna',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/supercoiled-plasmid-dna-preps') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Plasmid DNA Prep Services',
          item: 'https://www.aldevron.com/custom-manufacturing/supercoiled-plasmid-dna-preps',
        },
      ],
    };
  } else if (path === '/quality-grades/gmp/small-scale') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'cGMP',
          item: 'https://www.aldevron.com/quality-grades/gmp',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Small-Scale cGMP Plasmid DNA',
          item: 'https://www.aldevron.com/quality-grades/gmp/small-scale',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/nanoplasmid') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nanoplasmid',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/nanoplasmid/faq') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nanoplasmid',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Nanoplasmid™ Vector FAQ',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid/faq',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/nanoplasmid/nanoplasmid-retrofit') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nanoplasmid',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Nanoplasmid Vector Design/Retrofit',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid/nanoplasmid-retrofit',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/nanoplasmid/transposon-delivery') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nanoplasmid',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Non-Viral Gene Delivery',
          item: 'https://www.aldevron.com/custom-manufacturing/nanoplasmid/transposon-delivery',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/alchemy-cell-free-dna-technology') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Alchemy™ Cell-free DNA Technology',
          item: 'https://www.aldevron.com/custom-manufacturing/alchemy-cell-free-dna-technology',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/custom-protein-services') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Protein Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing/custom-protein-services',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/ribonucleoproteins') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CRISPR RNP Complexes',
          item: 'https://www.aldevron.com/custom-manufacturing/ribonucleoproteins',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/cgmp-grna-manufacturing-sequencing') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'cGMP gRNA Manufacturing and Sequencing Services',
          item: 'https://www.aldevron.com/custom-manufacturing/cgmp-grna-manufacturing-sequencing',
        },
      ],
    };
  } else if (path === '/custom-manufacturing/storage-stability') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Custom Manufacturing',
          item: 'https://www.aldevron.com/custom-manufacturing',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Storage & Stability',
          item: 'https://www.aldevron.com/custom-manufacturing/storage-stability',
        },
      ],
    };
  } else if (path === '/quality-grades') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
      ],
    };
  } else if (path === '/quality-grades/gmp-source-grade') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'GMP-Source',
          item: 'https://www.aldevron.com/quality-grades/gmp-source-grade',
        },
      ],
    };
  } else if (path === '/quality-grades/research-grade') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Research Grade',
          item: 'https://www.aldevron.com/quality-grades/research-grade',
        },
      ],
    };
  } else if (path === '/quality-grades/research-grade/plasmid-dna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Research Grade',
          item: 'https://www.aldevron.com/quality-grades/research-grade',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Research Grade Plasmid DNA',
          item: 'https://www.aldevron.com/quality-grades/research-grade/plasmid-dna',
        },
      ],
    };
  } else if (path === '/quality-grades/research-grade/protein') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Research Grade',
          item: 'https://www.aldevron.com/quality-grades/research-grade',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Research Grade Proteins',
          item: 'https://www.aldevron.com/quality-grades/research-grade/protein',
        },
      ],
    };
  } else if (path === '/quality-grades/gmp') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'cGMP',
          item: 'https://www.aldevron.com/quality-grades/gmp',
        },
      ],
    };
  } else if (path === '/quality-grades/research-grade/rna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quality Grades',
          item: 'https://www.aldevron.com/quality-grades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Research Grade',
          item: 'https://www.aldevron.com/quality-grades/research-grade',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Research Grade RNA',
          item: 'https://www.aldevron.com/quality-grades/research-grade/rna',
        },
      ],
    };
  } else if (path === '/catalog-products') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
      ],
    };
  } else if (path === '/catalog-products/nucleases') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gene Editing Enzymes',
          item: 'https://www.aldevron.com/catalog-products/nucleases',
        },
      ],
    };
  } else if (path === '/catalog-products/crispr-nucleases/eureca-v-nuclease') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Eureca-V Nuclease',
          item: 'https://www.aldevron.com/catalog-products/crispr-nucleases/eureca-v-nuclease',
        },
      ],
    };
  } else if (path === '/catalog-products/crispr-nucleases/spyfi-nuclease') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SpyFi Cas9 Nuclease',
          item: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spyfi-nuclease',
        },
      ],
    };
  } else if (path === '/catalog-products/crispr-nucleases/spcas9') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SpCas9 Nucleases',
          item: 'https://www.aldevron.com/catalog-products/crispr-nucleases/spcas9',
        },
      ],
    };
  } else if (path === '/catalog-products/ivt-enzymes') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'In vitro transcription and capping enzymes',
          item: 'https://www.aldevron.com/catalog-products/ivt-enzymes',
        },
      ],
    };
  } else if (path === '/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'IVT Enzymes',
          item: 'https://www.aldevron.com/catalog-products/ivt-enzymes',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Codex HiCap RNA T7 Polymerase',
          item: 'https://www.aldevron.com/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase',
        },
      ],
    };
  } else if (path === '/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'IVT Enzymes',
          item: 'https://www.aldevron.com/catalog-products/ivt-enzymes',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Custom mRNA Enzyme Manufacturing',
          item: 'https://www.aldevron.com/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes',
        },
      ],
    };
  } else if (path === '/catalog-products/cloning-backbones') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cloning Backbones',
          item: 'https://www.aldevron.com/catalog-products/cloning-backbones',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-aav') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catalog Products',
          item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'pALD-AAV System',
          item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-x80') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids',
        },
        {
          '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
        },
        {
          '@type': 'ListItem', position: 5, name: 'pALD – X80 for rAAV Production', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-x80',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-itr') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids',
        },
        {
          '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
        },
        {
          '@type': 'ListItem', position: 5, name: 'pALD – ITR Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-itr',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-help') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids',
        },
        {
          '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
        },
        {
          '@type': 'ListItem', position: 5, name: 'pALD - Help for rAAV Production', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-help',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids',
        },
        {
          '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav',
        },
        {
          '@type': 'ListItem', position: 5, name: 'Rep/Cap Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids',
        },
      ],
    };
  } else if (path === '/catalog-products/viral-vector-plasmids/pald-lenti') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids',
        },
        {
          '@type': 'ListItem', position: 4, name: 'pALD-Lenti', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-lenti',
        },
      ],
    };
  } else if (path === '/catalog-products/cloning-backbones/pald-cv42-cv77-dna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'pALD DNA Cloning Backbones', item: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-cv42-cv77-dna',
        },
      ],
    };
  } else if (path === '/catalog-products/cloning-backbones/pald-utr-rna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'RNA Cloning Backbones', item: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-utr-rna',
        },
      ],
    };
  } else if (path === '/catalog-products/reporters') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters',
        },
      ],
    };
  } else if (path === '/catalog-products/reporters/dasher-gfp-mrna') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters',
        },
        {
          '@type': 'ListItem', position: 4, name: 'DasherGFP mRNA Products', item: 'https://www.aldevron.com/catalog-products/reporters/dasher-gfp-mrna',
        },
      ],
    };
  } else if (path === '/catalog-products/reporters/viral-vector-transgene-reporters') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters',
        },
        {
          '@type': 'ListItem', position: 4, name: 'Viral Vector Transgene Reporters', item: 'https://www.aldevron.com/catalog-products/reporters/viral-vector-transgene-reporters',
        },
      ],
    };
  } else if (path === '/catalog-products/reporters/traditional-pdna-reporters') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters',
        },
        {
          '@type': 'ListItem', position: 4, name: 'Traditional plasmid DNA Reporters', item: 'https://www.aldevron.com/catalog-products/reporters/traditional-pdna-reporters',
        },
      ],
    };
  } else if (path === '/catalog-products/reporters/nanoplasmid-reporter-constructs') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters',
        },
        {
          '@type': 'ListItem', position: 4, name: 'Nanoplasmid Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters/nanoplasmid-reporter-constructs',
        },
      ],
    };
  } else if (path === '/catalog-products/free-sample') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Free Samples', item: 'https://www.aldevron.com/catalog-products/free-sample',
        },
      ],
    };
  } else if (path === '/about-us') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.aldevron.com/about-us',
        },
      ],
    };
  } else if (path === '/facilities') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities',
        },
      ],
    };
  } else if (path === '/facilities/breakthrough-campus-fargo') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Breakthrough Campus', item: 'https://www.aldevron.com/facilities/breakthrough-campus-fargo',
        },
      ],
    };
  } else if (path === '/facilities/advance-campus-fargo') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Advance Campus', item: 'https://www.aldevron.com/facilities/advance-campus-fargo',
        },
      ],
    };
  } else if (path === '/facilities/aldevron-madison') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Innovate Campus', item: 'https://www.aldevron.com/facilities/aldevron-madison',
        },
      ],
    };
  } else if (path === '/facilities/discovery-center-waltham') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/',
        },
        {
          '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities',
        },
        {
          '@type': 'ListItem', position: 3, name: 'Discovery Center', item: 'https://www.aldevron.com/facilities/discovery-center-waltham',
        },
      ],
    };
  }

  if (schemaData) {
    // Prevent duplicate injection
    if (!document.querySelector('script[data-breadcrumb-schema]')) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb-schema', 'true');
      script.textContent = JSON.stringify(schemaData);

      document.head.appendChild(script);
    }
  } else {
    console.log('No schema found for:', path);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSchema);
} else {
  loadSchema();
}
