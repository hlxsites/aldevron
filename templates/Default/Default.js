// export default function buildAutoBlocks(block) {
//     const blocks = block.querySelector('.section');
    
//     // Creating the default template wrapper
//     const defaultTemplate = document.createElement('div');
//     defaultTemplate.id = 'content-wrapper';
    
//     // Moving heroBanner inside defaultTemplate
//     const heroBanner = blocks.querySelector('.hero-wrapper');
//     defaultTemplate.appendChild(heroBanner);
//     // heroBanner.remove();
    
//     // Creating content wrapper
//     const content = document.createElement('div');
//     content.id = 'content';
    
//     // Creating outer element
//     const outerElement = document.createElement('div');
//     outerElement.className = 'outer';
    
//     // Creating main and sidebar elements
//     const main = document.createElement('div');
//     main.id = 'main';
    
//     const sidebar = document.createElement('div');
//     sidebar.id = 'sidebar';
    
//     const sidebars = blocks.querySelectorAll('[data-block-name^="sidebar-"]');
//     console.log(sidebars.length);
//     sidebars.forEach(sidebarItem => {
//         sidebar.appendChild(sidebarItem);
//     });
    
//     [...blocks.children].forEach(block => {
//         main.appendChild(block);
//     })

//     const clearFix = document.createElement('div');
//     clearFix.className = 'clearfix';

//     outerElement.appendChild(main);
//     outerElement.appendChild(sidebar);
//     content.appendChild(outerElement);
//     content.appendChild(clearFix);
//     defaultTemplate.appendChild(content);
    
//     block.appendChild(defaultTemplate);
// }

export default function buildAutoBlocks(block) {
    const blocks = block.querySelector('.section');
    const sidebars = blocks.querySelectorAll('[data-block-name^="sidebar-"]');
    
    // Creating the default template wrapper
    const defaultTemplate = document.createElement('div');
    defaultTemplate.id = 'content-wrapper';

    // Appending Hero banner
    const heroBanner = blocks.querySelector('.hero-wrapper');
    defaultTemplate.appendChild(heroBanner);

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
        sidebars.forEach(sidebarItem => {
            sidebar.appendChild(sidebarItem);
        });
    } else {
        document.body.classList.add('full-width');
    }

    // Moving remaining blocks to main
    [...blocks.children].forEach(child => {
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
}

