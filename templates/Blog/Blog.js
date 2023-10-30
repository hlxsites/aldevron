import {
  div, article, p, a, img, h1, h4, h3,
} from '../../scripts/dom-builder.js';

import { capitalizeWords } from '../../scripts/aem.js';

let sideBarAvailbale = false;

function generateArchiveBlock(results) {
  // Reduce the results array to an object with the dates as keys and the counts as values.
  const dates = results.reduce((acc, article) => {
    const date = new Date(Number(article.date) * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    // If the date is not already in the accumulator, add it with a count of 1.
    if (!acc.hasOwnProperty(date)) {
      acc[date] = 1;
    } else {
      // Increment the count for the date.
      acc[date]++;
    }

    return acc;
  }, {});

  // Convert the object to an unordered list (UL) with list items (LI).
  const archiveSidebar = document.createElement('div');
  const heading = h3('Archives');
  archiveSidebar.className = 'block';
  archiveSidebar.appendChild(heading);

  const ul = document.createElement('ul');
  for (const [title, count] of Object.entries(dates)) {
    
    const li = document.createElement('li');
    const link = document.createElement('a')
    link.textContent = `${title} (${count})`;
    link.setAttribute('href',`/archive/?date=${title.replace(' ','/')}`);
    li.appendChild(link);

    ul.appendChild(li);
  }
  archiveSidebar.appendChild(ul);
  return archiveSidebar;
}


function generateResultsBlock(articles, currentPage, totalArticles) {
  const articleElements = articles.map((art) => article(
    { class: `${art.image ? 'post-item post-has-img clearfix' : 'post-item clearfix'}` },
    div(
      { class: 'post-image ' },
      img({ src: art.image, width: '1200', alt: '' }),
    ),
    div(
      { class: 'post-content' },
      h1({ class: 'post-title' }, a({ href: art.path }, capitalizeWords(art.title.replace(/[\W]+/g, ' ')))),
      div(
        { class: 'post-meta' },
        p({ class: 'post-date' }, new Date(Number(art.date) * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })),
        p(
          { class: 'post-author' },
          '/ by ',
          a({ href: `author/${art.author.toLowerCase()}` }, art.author),
        ),
      ),
      div(
        { class: 'post-body clearfix' },
        h4(art['sub-title']),
        p(art.description),
      ),
      a({ href: art.path, 'aria-label': 'Read More', class: 'readmore' }, 'Read More'),
    ),
  ));

  // Pagination logic
  const totalPages = Math.ceil(totalArticles / 10);
  const paginationDiv = div({ class: 'blog-pagination clearfix' });
  if (currentPage < totalPages) {
    const nextButton = a(
      { href: `?page=${parseInt(currentPage, 10) + 1}`, class: 'button next-posts' },
      'Next',
    );
    paginationDiv.appendChild(nextButton);
  }

  // Appending pagination buttons to the results block
  const postListing = div({ class: 'post-listing' }, ...articleElements);
  postListing.appendChild(paginationDiv);
  return postListing;
}

async function fetchBlogData() {
  try {
    const response = await fetch('/query-index.json');
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function getBlogsContent(filteredResults, pageNumber = 1) {
  try {
    let sortedResults = [];
    if (filteredResults.length) {
      sortedResults = filteredResults.sort((ar1, ar2) => ar2.date - ar1.date);
    }

    const itemsPerPage = 10;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const paginatedResults = sortedResults.slice(startIndex, startIndex + itemsPerPage);

    if (paginatedResults.length > 0) {
      return generateResultsBlock(paginatedResults, pageNumber, sortedResults.length);
    }
  } catch (error) {
    console.error('Error fetching and processing data:', error);
  }
  return [];
}

function setFullWidthToBody() {
  document.body.classList.add('full-width');
}


export default async function buildAutoBlocks(block) {
  const searchParams = new URLSearchParams(window.location.search);
  let filteredResults;
  let pageNumber = 1; // Use let instead of const
  if (searchParams.has('page')) { // Check for 'page' instead of 'sort'
    pageNumber = searchParams.get('page');
  }

  const data = await fetchBlogData();
    filteredResults = data.filter((item) => {
      const path = item.path.toLowerCase();
      const regex = /^\/blog\/.+/;
      return regex.test(path);
  });

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

  // Moving remaining blocks to main
  [...blocks.children].forEach((child) => {
    main.appendChild(child);
  });

  const blogsContent = await getBlogsContent(filteredResults, pageNumber);
  if (blogsContent) {
    main.appendChild(blogsContent);
  }
  const archiveSidebar = generateArchiveBlock(filteredResults);
  if(archiveSidebar) {
    sideBarAvailbale = true;
    sidebar.appendChild(archiveSidebar);
  }

  if (sidebars.length > 0) {
    sidebars.forEach((sidebarItem) => {
      sidebar.appendChild(sidebarItem);
    });
  } else {
    if(!sideBarAvailbale) {
      setFullWidthToBody();
    }
  }

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
