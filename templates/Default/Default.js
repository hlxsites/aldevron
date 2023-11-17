function setSidebarMaxHeight() {
  let height = 0;
  const sidebar = document.querySelector('#sidebar');
  [...sidebar.children].forEach((element) => {
    height += element.offsetHeight;
  });
  sidebar.style.maxHeight = `${height}px`;
}

function setSidebarHeight() {
  window.addEventListener('resize', setSidebarMaxHeight);
}

export default function buildAutoBlocks(block) {
  const blocks = block.querySelector('.section');
  const sidebars = blocks.querySelectorAll('[data-block-name^="sidebar-"]');
  // Creating the default template wrapper
  const defaultTemplate = document.createElement('div');
  defaultTemplate.id = 'content-wrapper';

  // Appending Hero banner
  const heroBanner = blocks.querySelector('.hero-wrapper');
  if (heroBanner) {
    defaultTemplate.appendChild(heroBanner);
  }

  // Creating content wrapper
  const content = document.createElement('div');
  content.id = 'content';

  // Creating outer element
  const outerElement = document.createElement('div');
  outerElement.className = 'outer';

  // Creating main and sidebar elements
  const main = document.createElement('div');
  main.id = 'main';

  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';

  // Adding sidebars if available
  if (sidebars.length > 0) {
    sidebars.forEach((sidebarItem) => {
      sidebar.appendChild(sidebarItem);
    });
  } else {
    document.body.classList.add('full-width');
  }

  // Moving remaining blocks to main
  [...blocks.children].forEach((child) => {
    main.appendChild(child);
  });

  // Creating clearfix element
  const clearFix = document.createElement('div');
  clearFix.className = 'clearfix';

  outerElement.appendChild(main);
  outerElement.appendChild(sidebar);
  content.appendChild(outerElement);
  content.appendChild(clearFix);
  defaultTemplate.appendChild(content);
  block.appendChild(defaultTemplate);
  setSidebarMaxHeight();
  setSidebarHeight();
}
