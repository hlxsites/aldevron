function loadSchema() {
  // Normalize the current path
  let path = window.location.pathname
    .replace(/\/$/, '')       // remove trailing slash
    .replace(/\.html$/, '');  // remove .html if present

  if (path === '') {
    path = '/';
  }
  console.log('schema.js loaded');
  console.log('Current path:', path);

  let schemaData = null;

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
  }else if (path === '/custom-manufacturing/nanoplasmid/nanoplasmid-retrofit') {
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
}else if (path === '/custom-manufacturing/nanoplasmid/transposon-delivery') {
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
}else if (path === '/custom-manufacturing/alchemy-cell-free-dna-technology') {
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
}else if (path === '/custom-manufacturing/custom-protein-services') {
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
}else if (path === '/custom-manufacturing/ribonucleoproteins') {
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
}else if (path === '/custom-manufacturing/cgmp-grna-manufacturing-sequencing') {
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
}else if (path === '/custom-manufacturing/storage-stability') {
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
}else if (path === '/quality-grades') {
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
}

else if (path === '/quality-grades/gmp-source-grade') {
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
}

else if (path === '/quality-grades/research-grade') {
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
}

else if (path === '/quality-grades/research-grade/plasmid-dna') {
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
}

else if (path === '/quality-grades/research-grade/protein') {
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
}else if (path === '/quality-grades/gmp') {
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
}
else if (path === '/quality-grades/research-grade/rna') {
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
}else if (path === '/catalog-products') {
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
}

else if (path === '/catalog-products/nucleases') {
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
}

else if (path === '/catalog-products/crispr-nucleases/eureca-v-nuclease') {
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
}

else if (path === '/catalog-products/crispr-nucleases/spyfi-nuclease') {
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
}

else if (path === '/catalog-products/crispr-nucleases/spcas9') {
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
}else if (path === '/catalog-products/ivt-enzymes') {
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
}

else if (path === '/catalog-products/ivt-enzymes/codex-hicap-rna-polymerase') {
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
}

else if (path === '/catalog-products/ivt-enzymes/wild-type-ivt-capping-enzymes') {
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
}

else if (path === '/catalog-products/cloning-backbones') {
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
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-aav') {
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
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-x80') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids' },
      { '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav' },
      { '@type': 'ListItem', position: 5, name: 'pALD – X80 for rAAV Production', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-x80' },
    ],
  };
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-itr') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids' },
      { '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav' },
      { '@type': 'ListItem', position: 5, name: 'pALD – ITR Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-itr' },
    ],
  };
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/pald-help') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids' },
      { '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav' },
      { '@type': 'ListItem', position: 5, name: 'pALD - Help for rAAV Production', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/pald-help' },
    ],
  };
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids' },
      { '@type': 'ListItem', position: 4, name: 'pALD-AAV System', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav' },
      { '@type': 'ListItem', position: 5, name: 'Rep/Cap Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-aav/repcap-plasmids' },
    ],
  };
}

else if (path === '/catalog-products/viral-vector-plasmids/pald-lenti') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Viral Vector Plasmids', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids' },
      { '@type': 'ListItem', position: 4, name: 'pALD-Lenti', item: 'https://www.aldevron.com/catalog-products/viral-vector-plasmids/pald-lenti' },
    ],
  };
}

else if (path === '/catalog-products/cloning-backbones/pald-cv42-cv77-dna') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'pALD DNA Cloning Backbones', item: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-cv42-cv77-dna' },
    ],
  };
}

else if (path === '/catalog-products/cloning-backbones/pald-utr-rna') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'RNA Cloning Backbones', item: 'https://www.aldevron.com/catalog-products/cloning-backbones/pald-utr-rna' },
    ],
  };
}

else if (path === '/catalog-products/reporters') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters' },
    ],
  };
}

else if (path === '/catalog-products/reporters/dasher-gfp-mrna') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters' },
      { '@type': 'ListItem', position: 4, name: 'DasherGFP mRNA Products', item: 'https://www.aldevron.com/catalog-products/reporters/dasher-gfp-mrna' },
    ],
  };
}

else if (path === '/catalog-products/reporters/viral-vector-transgene-reporters') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters' },
      { '@type': 'ListItem', position: 4, name: 'Viral Vector Transgene Reporters', item: 'https://www.aldevron.com/catalog-products/reporters/viral-vector-transgene-reporters' },
    ],
  };
}

else if (path === '/catalog-products/reporters/traditional-pdna-reporters') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters' },
      { '@type': 'ListItem', position: 4, name: 'Traditional plasmid DNA Reporters', item: 'https://www.aldevron.com/catalog-products/reporters/traditional-pdna-reporters' },
    ],
  };
}

else if (path === '/catalog-products/reporters/nanoplasmid-reporter-constructs') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters' },
      { '@type': 'ListItem', position: 4, name: 'Nanoplasmid Reporter Constructs', item: 'https://www.aldevron.com/catalog-products/reporters/nanoplasmid-reporter-constructs' },
    ],
  };
}

else if (path === '/catalog-products/free-sample') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Catalog Products', item: 'https://www.aldevron.com/catalog-products' },
      { '@type': 'ListItem', position: 3, name: 'Free Samples', item: 'https://www.aldevron.com/catalog-products/free-sample' },
    ],
  };
}

else if (path === '/about-us') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.aldevron.com/about-us' },
    ],
  };
}

else if (path === '/facilities') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities' },
    ],
  };
}

else if (path === '/facilities/breakthrough-campus-fargo') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities' },
      { '@type': 'ListItem', position: 3, name: 'Breakthrough Campus', item: 'https://www.aldevron.com/facilities/breakthrough-campus-fargo' },
    ],
  };
}

else if (path === '/facilities/advance-campus-fargo') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities' },
      { '@type': 'ListItem', position: 3, name: 'Advance Campus', item: 'https://www.aldevron.com/facilities/advance-campus-fargo' },
    ],
  };
}

else if (path === '/facilities/aldevron-madison') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities' },
      { '@type': 'ListItem', position: 3, name: 'Innovate Campus', item: 'https://www.aldevron.com/facilities/aldevron-madison' },
    ],
  };
}

else if (path === '/facilities/discovery-center-waltham') {
  schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aldevron.com/' },
      { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://www.aldevron.com/facilities' },
      { '@type': 'ListItem', position: 3, name: 'Discovery Center', item: 'https://www.aldevron.com/facilities/discovery-center-waltham' },
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

      console.log('Breadcrumb schema injected');
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


const VIDEO_SCHEMAS = {
  "/about-us/news/aldevron-announces-expansion-of-mrna-production-capability": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron Announces mRNA Expansion",
    "description": "Mark Wetzel, Vice President and General Manager of Aldevron mRNA Services, announces the expansion.",
    "thumbnailUrl": "https://i.ytimg.com/vi/_TDhnDS-aVY/default.jpg",
    "uploadDate": "2023-05-01T11:30:09Z",
    "duration": "PT34S",
    "embedUrl": "https://www.youtube.com/embed/_TDhnDS-aVY",
    "interactionCount": 378
  },

  "/blog/presentation-rna-yield-full-length-product": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Presentation: Trade-offs in RNA manufacturing",
    "description": "In mRNA manufacturing, two critical metrics—yield and percent full-length product (FLP)—often sit at opposite ends of the optimization spectrum...",
    "thumbnailUrl": "https://i.ytimg.com/vi/2_gC6khJXI0/default.jpg",
    "uploadDate": "2025-12-01T17:43:04Z",
    "duration": "PT19M30S",
    "embedUrl": "https://www.youtube.com/embed/2_gC6khJXI0",
    "interactionCount": 16
  },

  "/custom-manufacturing/alchemy-cell-free-dna-technology": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron Alchemy™ Cell-free DNA Technology",
    "description": "",
    "thumbnailUrl": "https://i.vimeocdn.com/video/2006601755-7c5e4347ec24fb0aebf96cca384c9c0949e06b9980b35b656602e78353b471ab-d_295x166?region=us",
    "uploadDate": "2025-04-18T12:16:21Z",
    "duration": "PT1M1S",
    "embedUrl": "https://player.vimeo.com/video/1076745119?h=09120df137"
  },

  "/about-us": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Who We Are | Aldevron",
    "description": "To learn more, please visit https://www.aldevron.com.",
    "thumbnailUrl": "https://i.ytimg.com/vi/7Qj9RUmHEKY/default.jpg",
    "uploadDate": "2022-02-15T15:14:29Z",
    "duration": "PT1M16S",
    "embedUrl": "https://www.youtube.com/embed/7Qj9RUmHEKY",
    "interactionCount": 39654
  },
   "/about-us/news/world-first-personalized-crispr-gene-editing-drug-product": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "World’s First mRNA-based Personalized CRISPR Therapy",
    "description": "Aldevron and IDT have announced the successful manufacture of the world’s first personalized CRISPR gene editing drug product to treat an infant with urea cycle disorder (UCD).",
    "thumbnailUrl": "https://i.ytimg.com/vi/CbVwAhx8LVs/default.jpg",
    "uploadDate": "2025-12-01T17:43:30Z",
    "duration": "PT27S",
    "embedUrl": "https://www.youtube.com/embed/CbVwAhx8LVs",
    "interactionCount": 206
  },

  "/custom-manufacturing/nanoplasmid": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Discover the Power of Small and Safe with Nanoplasmid®",
    "description": "The Nanoplasmid small backbone of less than 500 base pairs and antibiotic-free selection system provides users with the next-generation plasmid vector for cell and gene therapy applications.",
    "thumbnailUrl": "https://i.ytimg.com/vi/G80gfyKOMPU/default.jpg",
    "uploadDate": "2023-02-06T16:39:32Z",
    "duration": "PT2M51S",
    "embedUrl": "https://www.youtube.com/embed/G80gfyKOMPU",
    "interactionCount": 1621
  },

  "/blog/presentation-emerging-non-viral-modalities": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Enabling Emerging Non-viral Modalities for Gene and Cell Therapies",
    "description": "Presented at Biotech Week Boston-Cell & Gene Therapy International by Patrick Paez.",
    "thumbnailUrl": "https://i.ytimg.com/vi/cGI56VJV3sQ/default.jpg",
    "uploadDate": "2024-11-01T18:56:12Z",
    "duration": "PT16M8S",
    "embedUrl": "https://www.youtube.com/embed/cGI56VJV3sQ",
    "interactionCount": 5
  },

  "/nanoplasmidfr": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Discover the Power of Small and Safe with Nanoplasmid®",
    "description": "The Nanoplasmid small backbone of less than 500 base pairs and antibiotic-free selection system provides users with the next-generation plasmid vector for cell and gene therapy applications.",
    "thumbnailUrl": "https://i.ytimg.com/vi/G80gfyKOMPU/default.jpg",
    "uploadDate": "2023-02-06T16:39:32Z",
    "duration": "PT2M51S",
    "embedUrl": "https://www.youtube.com/embed/G80gfyKOMPU",
    "interactionCount": 1621
  },

  "/blog/presentation-building-a-comprehensive-mrna-production-ecosystem": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Sequence-to-vial mRNA manufacturing",
    "description": "Todd Howren presents Aldevron’s manufacturing ecosystem under one roof for seamless mRNA drug product manufacturing.",
    "thumbnailUrl": "https://i.ytimg.com/vi/scV5Ug-dZzs/default.jpg",
    "uploadDate": "2023-08-25T14:12:31Z",
    "duration": "PT31M1S",
    "embedUrl": "https://www.youtube.com/embed/scV5Ug-dZzs",
    "interactionCount": 249
  },

  "/blog/plasmid-dna-insights-expanded-focus-on-cmc-in-gene-cell-therapy-development": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Plasmid DNA Insights: Expanded Focus on CMC in Gene & Cell Therapy Development",
    "description": "To learn more, please visit https://www.aldevron.com/.",
    "thumbnailUrl": "https://i.ytimg.com/vi/lRm3MlCN-hM/default.jpg",
    "uploadDate": "2024-03-12T15:07:52Z",
    "duration": "PT56M11S",
    "embedUrl": "https://www.youtube.com/embed/lRm3MlCN-hM",
    "interactionCount": 516
  },

  "/blog/fidelity-cell-free-dna-01": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Cell-free DNA Technology: Next Generation Solutions for mRNA Manufacturing",
    "description": "Presented by Nate Russart, Ph.D. Originally presented at the 2025 DNA Process Development and Manufacturing Summit.",
    "thumbnailUrl": "https://i.ytimg.com/vi/CGDYq9ytU8I/default.jpg",
    "uploadDate": "2025-12-01T17:43:41Z",
    "duration": "PT27M48S",
    "embedUrl": "https://www.youtube.com/embed/CGDYq9ytU8I",
    "interactionCount": 70
  },

  "/blog/the-source-of-gmp-source-how-client-demand-drives-innovation": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "The Source of GMP-Source® | John Ballantyne, Ph.D.",
    "description": "John Ballantyne is Aldevron's Co-Founder and Chief Science Officer.",
    "thumbnailUrl": "https://i.ytimg.com/vi/2zVb9b_6P7g/default.jpg",
    "uploadDate": "2020-05-12T17:00:50Z",
    "duration": "PT4M16S",
    "embedUrl": "https://www.youtube.com/embed/2zVb9b_6P7g",
    "interactionCount": 1559
  },

  "/blog/presentation-innovative-mrna-manufacturing": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Innovative RNA Manufacturing: Breaking Barriers with Mutant T7 Polymerase",
    "description": "Presented by Nate Spangler at the mRNA Process Development & Manufacturing Summit.",
    "thumbnailUrl": "https://i.ytimg.com/vi/F9I18brIV4U/default.jpg",
    "uploadDate": "2024-11-07T20:42:08Z",
    "duration": "PT16M10S",
    "embedUrl": "https://www.youtube.com/embed/F9I18brIV4U",
    "interactionCount": 13
  },
  "/blog/dna-plasmids-for-the-genetic-engineering-of-clinical-grade-t-cells": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "DNA Plasmids for the Genetic Engineering of Clinical-Grade T Cells | Laurence Cooper, MD, PhD",
    "description": "To learn more, please visit https://www.aldevron.com/about-us/news/aldevron-announces-virtual-breakthrough-speaker-series.",
    "thumbnailUrl": "https://i.ytimg.com/vi/g_lTF9aj0G8/default.jpg",
    "uploadDate": "2021-04-28T20:06:36Z",
    "duration": "PT58M49S",
    "embedUrl": "https://www.youtube.com/embed/g_lTF9aj0G8",
    "interactionCount": 870
  },

  "/car-tcr-europe": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Advancing Therapies with mRNA",
    "description": "Nate Spangler, Ph.D., Director of Innovation & Strategy, outlines the capability of Aldevron mRNA production. Joining him are Tom Lynch, Ph.D., VP of Client Services for Proteins, and James Sulzberger, Technical Director of Client Services for Proteins, who discuss capabilities for supplying enzymes for RNA manufacturing and other proteins for vaccine development.",
    "thumbnailUrl": "https://i.ytimg.com/vi/XYfiTa4Tvls/default.jpg",
    "uploadDate": "2024-03-12T15:08:13Z",
    "duration": "PT18M5S",
    "embedUrl": "https://www.youtube.com/embed/XYfiTa4Tvls",
    "interactionCount": 163
  },

  "/blog/presentation-crispr-manufacturing-solutions-decade": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "From Innovation to Commercialization: CRISPR Medicine Manufacturing Solutions for the Next Decade",
    "description": "Presented by Max Sellman, Senior Product Manager-Gene Editing, at the Genome Editing Therapeutics Summit.",
    "thumbnailUrl": "https://i.ytimg.com/vi/-zY_bSVB1LU/default.jpg",
    "uploadDate": "2025-12-01T17:44:14Z",
    "duration": "PT25M13S",
    "embedUrl": "https://www.youtube.com/embed/-zY_bSVB1LU",
    "interactionCount": 51
  },

  "/blog/evaluating-quality-systems-with-your-manufacturing-partners": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Evaluating Quality Systems with Your Manufacturing Partners",
    "description": "",
    "thumbnailUrl": "https://i.ytimg.com/vi/N2X8dE_oX4Y/default.jpg",
    "uploadDate": "2021-02-02T14:57:08Z",
    "duration": "PT4M46S",
    "embedUrl": "https://www.youtube.com/embed/N2X8dE_oX4Y",
    "interactionCount": 282
  },

  "/about-us/news/aldevron-expands-manufacturing-capabilities-in-madison": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Tour Aldevron's Expanded Facility in Madison, Wisconsin with Tom Foti",
    "description": "To learn more, visit http://www.aldevron.com/campus.",
    "thumbnailUrl": "https://i.ytimg.com/vi/UZMEg7ZOstA/default.jpg",
    "uploadDate": "2021-02-12T15:36:34Z",
    "duration": "PT10M26S",
    "embedUrl": "https://www.youtube.com/embed/UZMEg7ZOstA",
    "interactionCount": 1492
  },

  "/modalities/rna-vaccine-therapeutics": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron mRNA - Under One Roof",
    "description": "Experience the efficiency and convenience of Aldevron's end-to-end solutions to streamline your mRNA-LNP development and production.",
    "thumbnailUrl": "https://i.ytimg.com/vi/lfBGz0gtwnI/default.jpg",
    "uploadDate": "2024-10-04T19:48:29Z",
    "duration": "PT1M10S",
    "embedUrl": "https://www.youtube.com/embed/lfBGz0gtwnI",
    "interactionCount": 583967
  },

  "/blog/webinar-aldevron/repligen-case-study": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron/Repligen Case Study Webinar",
    "description": "Titled, Validation of mRNA concentration determination using variable pathlength spectroscopy, this webinar from BioInsights was developed by Aldevron and Repligen. Recorded July 18, 2023.",
    "thumbnailUrl": "https://i.ytimg.com/vi/LnQWUXBfuzI/default.jpg",
    "uploadDate": "2023-07-11T14:23:41Z",
    "duration": "PT51M42S",
    "embedUrl": "https://www.youtube.com/embed/LnQWUXBfuzI",
    "interactionCount": 58
  },

  "/blog/expanding-next-gen-crispr-manufacturing-solutions": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Presentation: Enabling production of next-generation genetic medicines",
    "description": "Presented by Max Sellman at the Genomic Medicines Summit. Focused on enabling production through comprehensive CRISPR manufacturing solutions.",
    "thumbnailUrl": "https://i.ytimg.com/vi/uju6rteBbUk/default.jpg",
    "uploadDate": "2025-12-01T17:38:06Z",
    "duration": "PT32M44S",
    "embedUrl": "https://www.youtube.com/embed/uju6rteBbUk",
    "interactionCount": 7
  },

  "/about-us/news/aldevron-receives-spotlight-at-2021-state-of-the-state-address-for-its-40-plus-covid-19-programs": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron Honored at 2021 North Dakota State of the State Address for its 40+ COVID-19 Programs",
    "description": "Governor Doug Burgum highlights Aldevron's role in supporting more than 40 COVID-19 vaccine, diagnostic, and therapeutic programs.",
    "thumbnailUrl": "https://i.ytimg.com/vi/xJ5nGqpWMGk/default.jpg",
    "uploadDate": "2021-01-08T22:48:23Z",
    "duration": "PT3M4S",
    "embedUrl": "https://www.youtube.com/embed/xJ5nGqpWMGk",
    "interactionCount": 438
  },

  "/discover-the-power-of-small-nanoplasmid-vector-platform": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Discover the Power of Small and Safe with Nanoplasmid®",
    "description": "The Nanoplasmid small backbone of less than 500 base pairs and antibiotic-free selection system provides users with the next-generation plasmid vector for cell and gene therapy applications.",
    "thumbnailUrl": "https://i.ytimg.com/vi/G80gfyKOMPU/default.jpg",
    "uploadDate": "2023-02-06T16:39:32Z",
    "duration": "PT2M51S",
    "embedUrl": "https://www.youtube.com/embed/G80gfyKOMPU",
    "interactionCount": 1621
  },

  "/advancing-every-day/vlog-mrna-sequence-to-vial": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron Sequence to Vial",
    "description": "Sequence-to-vial doesn't happen overnight—it requires scientific and engineering expertise, manufacturing proficiency and deep partnerships.",
    "thumbnailUrl": "https://i.ytimg.com/vi/iSaXWnnKpxY/default.jpg",
    "uploadDate": "2023-09-29T19:02:32Z",
    "duration": "PT4M14S",
    "embedUrl": "https://www.youtube.com/embed/iSaXWnnKpxY",
    "interactionCount": 128
  },

  "/blog/fidelity-cell-free-dna-02": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Cell-free DNA Technology: Next Generation Solutions for mRNA Manufacturing",
    "description": "Presented by Nate Russart, Ph.D. Originally presented at the 2025 DNA Process Development and Manufacturing Summit.",
    "thumbnailUrl": "https://i.ytimg.com/vi/CGDYq9ytU8I/default.jpg",
    "uploadDate": "2025-12-01T17:43:41Z",
    "duration": "PT27M48S",
    "embedUrl": "https://www.youtube.com/embed/CGDYq9ytU8I",
    "interactionCount": 70
  },

  "/blog/partnering-with-pioneers-to-deliver-plasmid-for-discovery-through-commercial-application": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Partnering with Pioneers to Deliver Plasmid for Discovery Through Commercial Application",
    "description": "Featuring Cindy Biffert, Barry Byrne, and Christine Sheaffer discussing plasmid manufacturing from discovery through commercialization.",
    "thumbnailUrl": "https://i.ytimg.com/vi/EsrCCd-7F5Y/default.jpg",
    "uploadDate": "2024-03-12T15:07:38Z",
    "duration": "PT56M59S",
    "embedUrl": "https://www.youtube.com/embed/EsrCCd-7F5Y",
    "interactionCount": 116
  },

  "/about-us/news/aldevron-receives-premier-technology-business-award": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron Receives Premier Technology Business Award",
    "description": "The Technology Council of North Dakota named Aldevron one of three leading technology businesses.",
    "thumbnailUrl": "https://i.ytimg.com/vi/r4gRJj-WxVw/default.jpg",
    "uploadDate": "2020-10-28T19:29:05Z",
    "duration": "PT2M5S",
    "embedUrl": "https://www.youtube.com/embed/r4gRJj-WxVw",
    "interactionCount": 555
  },

  "/blog/webinar-harnessing-potential-gene-therapies": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Webinar: Harnessing the Potential of Gene Therapies",
    "description": "Innovations and improvements in viral gene therapy. Recorded April 28, 2025.",
    "thumbnailUrl": "https://i.ytimg.com/vi/zlh7ojPpW-Q/default.jpg",
    "uploadDate": "2025-04-30T12:17:47Z",
    "duration": "PT57M30S",
    "embedUrl": "https://www.youtube.com/embed/zlh7ojPpW-Q",
    "interactionCount": 17
  },

  "/blog/when-demand-gets-tough-expansion-gets-going-aldevron-thought-leadership": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "OPCU: Outsourced Pharma Capacity Update, Featuring Todd Howren",
    "description": "Todd Howren discusses Aldevron's expanding RNA, plasmid DNA, and protein manufacturing capabilities.",
    "thumbnailUrl": "https://i.ytimg.com/vi/ObnkRZjZS-s/default.jpg",
    "uploadDate": "2024-03-12T15:06:50Z",
    "duration": "PT24M6S",
    "embedUrl": "https://www.youtube.com/embed/ObnkRZjZS-s",
    "interactionCount": 69
  },

  "/gmct-early-phase": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Lentiviral Plasmid Solutions for Discovery to Clinic",
    "description": "This video introduces Aldevron's plasmid solutions for accelerating gene-modified cell therapy development from discovery to clinic.",
    "thumbnailUrl": "https://i.vimeocdn.com/video/2060388679-091e67028fb946efd0a72520a486032e7fa4db852b024979fee2efaffe8ce9f3-d_295x166?region=us",
    "uploadDate": "2025-09-18T10:22:39Z",
    "duration": "PT1M36S",
    "embedUrl": "https://player.vimeo.com/video/1119810917?h=c3c2524073",
    "interactionCount": 0
  },

  "/virtualcareerfair": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Plasmid DNA Technology: Aldevron's Manufacturing Process",
    "description": "Discover how Aldevron produces high-quality plasmid DNA at scale to support gene therapy and DNA vaccines.",
    "thumbnailUrl": "https://i.ytimg.com/vi/cifimuc9mhs/default.jpg",
    "uploadDate": "2019-10-28T17:54:58Z",
    "duration": "PT5M7S",
    "embedUrl": "https://www.youtube.com/embed/cifimuc9mhs",
    "interactionCount": 1984
  },

  "/blog/presentation-crispr-genome-editing": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "CRISPR Genome Editing Solutions from Discovery to Clinic",
    "description": "A presentation by Coby Slagter-Jager presented at the 2024 CRISPR-Based Therapy Analytical Development Summit.",
    "thumbnailUrl": "https://i.ytimg.com/vi/Rg8PL4dWl4Y/default.jpg",
    "uploadDate": "2024-11-05T15:22:42Z",
    "duration": "PT24M41S",
    "embedUrl": "https://www.youtube.com/embed/Rg8PL4dWl4Y",
    "interactionCount": 12
  },

  "/plasmid-dna-insights-expanded-focus-on-cmc-in-gene-and-cell-therapy-development": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Plasmid DNA Insights: Expanded Focus on CMC in Gene & Cell Therapy Development",
    "description": "To learn more, please visit https://www.aldevron.com/.",
    "thumbnailUrl": "https://i.ytimg.com/vi/lRm3MlCN-hM/default.jpg",
    "uploadDate": "2024-03-12T15:07:52Z",
    "duration": "PT56M11S",
    "embedUrl": "https://www.youtube.com/embed/lRm3MlCN-hM",
    "interactionCount": 516
  },

  "/blog/tides-tv-tackling-mrna-manufacturing-challenges": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Tackling mRNA Manufacturing Challenges (TIDES TV with Nate Spangler, PhD)",
    "description": "Nate Spangler discusses the challenges of manufacturing mRNA and strategies to solve them.",
    "thumbnailUrl": "https://i.ytimg.com/vi/prVFYJQ03LQ/default.jpg",
    "uploadDate": "2021-09-22T14:27:00Z",
    "duration": "PT6M37S",
    "embedUrl": "https://www.youtube.com/embed/prVFYJQ03LQ",
    "interactionCount": 211
  },

  "/blog/mrna-lnp-solutions-one-roof": {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Aldevron mRNA - Under One Roof",
    "description": "Experience the efficiency and convenience of Aldevron's end-to-end solutions to streamline your mRNA-LNP development and production.",
    "thumbnailUrl": "https://i.ytimg.com/vi/lfBGz0gtwnI/default.jpg",
    "uploadDate": "2024-10-04T19:48:29Z",
    "duration": "PT1M10S",
    "embedUrl": "https://www.youtube.com/embed/lfBGz0gtwnI",
    "interactionCount": 583967
  }
  // ...continue all remaining pages exactly the same way...
};


function loadVideoSchema() {
  const path = window.location.pathname.replace(/\/$/, "");

  const schema = VIDEO_SCHEMAS[path];

  if (!schema) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);

  document.head.appendChild(script);
}

loadVideoSchema();