import { div, article, p, a, img, h1, h3, ul, li, checkbox } from '../../scripts/dom-builder.js';
import { capitalizeWords} from '../../scripts/aem.js';

const ITEMS_PER_PAGE = 10;

async function fetchNewsData() {
    try {
        const response = await fetch('/drafts/query-index.json');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];
    }
}


async function generateResultsBlock(articles, currentPage, totalArticles) {
  const articleElements = articles.map((art) => {
      return article(
        { class: art.image ? 'post-item post-has-img clearfix' : 'post-item clearfix' },
        art.image ? div({ class: 'post-image' }, a({ href: art.path }, img({ src: art.image}))) : '',
        div(
          { class: 'post-content' },
          p({ class: 'post-date' }, new Date(Number(art.startDate) * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })),
          p(a({class: 'post-title', href: art.path }, capitalizeWords(art.title))),
          
        ul(
              { class: 'post-type' },
              li({ class: 'post-body clearfix' }, art.type),
              li({ class: 'post-body clearfix' }, art.region),
              li({ class: 'post-body clearfix' }, art.address)
          )
        ),
      );
    });


    const postListing = div({ class: 'post-listing' }, ...articleElements);

    // Pagination logic
    const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
    const paginationDiv = div({ class: 'blog-pagination clearfix' });

    if (currentPage > 1) {
        const prevPageUrl = new URL(window.location.href);
        prevPageUrl.searchParams.set('page', parseInt(currentPage, 10) - 1);
        const prevButton = a({ href: `${prevPageUrl}`, class: 'button prev-posts' }, 'Previous');
        paginationDiv.appendChild(prevButton);
    }

    if (currentPage < totalPages) {
        const nextPageUrl = new URL(window.location.href);
        nextPageUrl.searchParams.set('page', parseInt(currentPage, 10) + 1);
        const nextButton = a({ href: `${nextPageUrl}`, class: 'button next-posts' }, 'Next');
        paginationDiv.appendChild(nextButton);
    }

    postListing.appendChild(paginationDiv);
    return postListing;
}

async function buildSidePanel() {
    const sidePanel = div({ class: 'side-panel' });

    // Filter options
    const eventTypeDropdown = div(
      { class: 'filter-option' },
      h3('Event Type'),
      selectOptions('type')
    );
  
    const regionDropdown = div(
      { class: 'filter-option' },
      h3('Region'),
      selectOptions('region')
    );
    eventTypeDropdown.addEventListener('change', applyFilters);
    regionDropdown.addEventListener('change', applyFilters);
    //const eventTypeDropdown = await selectOptions('type');
    //const regionDropdown = await selectOptions('region');

    const archivedEventsLink = p({ class: 'archivedEvents' }, a({ href: '/archived-events' }, 'Archived Events'));

    const filterPanel = p({ class: 'panel-title' }, h3('Filter By:'));

    sidePanel.appendChild(filterPanel);
    sidePanel.appendChild(eventTypeDropdown);
    sidePanel.appendChild(regionDropdown);
    sidePanel.appendChild(archivedEventsLink);

    return sidePanel;
}

async function selectOptions(optionName) {
    try {
        //const response = await fetch('/drafts/query-index.json');
        const jsonData = await fetchNewsData();
        const options = jsonData.data.map(item => item[optionName]).filter(value => value);

        // Remove duplicates and filter out undefined values
    const uniqueOptions = options.filter((value, index, self) => {
      return value && self.indexOf(value) === index;
   });
   console.log(uniqueOptions);
   // Create checkboxes for each option
   const checkboxes = uniqueOptions.map((option) => {
     return checkbox({ name: optionName, value: option }, option);
   });
   console.log(checkboxes);

   // Return the checkboxes wrapped in a div
   return div(...checkboxes);
 } catch (error) {
   console.error(`Error fetching ${optionName} options:`, error);
   return '';
 }
}

async function getNewsContent(filteredResults, pageNumber = 1) {
    try {
        const sortedResults = filteredResults.slice().sort((ar1, ar2) => ar2.date - ar1.date);
        const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
        const paginatedResults = sortedResults.slice(startIndex, startIndex + ITEMS_PER_PAGE);

        if (paginatedResults.length > 0) {
            return generateResultsBlock(paginatedResults, pageNumber, sortedResults.length);
        }
    } catch (error) {
        console.error('Error getting news content:', error);
        return '';
    }

    return '';
}

function applyFilters() {
    // Get all selected checkboxes
    const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Extract values of selected checkboxes
    const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

    // If no checkboxes are selected, show all results
    if (selectedValues.length === 0) {
        showAllResults();
        return;
    }

    // Filter results based on selected values
    const filteredResults = data.filter(item => {
        // Check if any of the selected values match the item's value
        return selectedValues.some(value => {
            // Compare with appropriate property of the item (e.g., item.type, item.region, etc.)
            return item.type === value || item.region === value; // Adjust as per your data structure
        });
    });

    // Display filtered results
    displayResults(filteredResults);
}

function showAllResults() {
    // Display all results (no filtering)
    displayResults(data); // Assuming `data` is accessible here and contains all events
}

function displayResults(results) {
    // Clear existing results
    const postListing = document.querySelector('.post-listing');
    postListing.innerHTML = '';

    // Generate and display new results
    const currentPage = 1; // Assuming pagination starts from the first page
    postListing.appendChild(generateResultsBlock(results, currentPage, results.length));
}

function showArchivedEvents() {
    const archivedEventsUrl = '/archived-events';

    // Get selected filter options
    const selectedEventType = document.querySelector('input[name="type"]:checked')?.value;
    const selectedRegion = document.querySelector('input[name="region"]:checked')?.value;

    // Build URL parameters based on selected filter options
    const urlParams = new URLSearchParams();
    if (selectedEventType) urlParams.append('type', selectedEventType);
    if (selectedRegion) urlParams.append('region', selectedRegion);

    // Redirect to the archived events page with filter options
    window.location.href = `${archivedEventsUrl}?${urlParams.toString()}`;
}

async function buildAutoBlocks(block) {
    const searchParams = new URLSearchParams(window.location.search);
    let pageNumber = 1;
    //let finalArticles = [];

    if (searchParams.has('page')) {
        pageNumber = searchParams.get('page');
    }

    const data = await fetchNewsData();
    const eventData = data.data;
    const filteredResults = eventData.filter(item => /events\/.*$/.test(item.path.toLowerCase()));
    console.log(filteredResults);

    // Filtering logic based on search parameters

    const newsRegex = /^\/drafts\/events-calendar(?:\/(?:\?.*)?)?$/;
    const sidePanel = await buildSidePanel();

    if (newsRegex.test(window.location.pathname)) {
        const newsContent = await getNewsContent(filteredResults, pageNumber);
        if(newsContent )  {
          const container = div({class: 'container'})
          const wrapper = div({ class: 'event-wrapper' });
          wrapper.appendChild(sidePanel);
          const pageTitle = document.title;
          console.log(pageTitle);
          const titlediv = document.createElement('div');
          titlediv.classList.add('items');
          const title = document.createElement('h2');
          title.classList.add('event-title');
          title.append(pageTitle);
          console.log(title);
          titlediv.appendChild(title);
          titlediv.appendChild(newsContent);
          wrapper.appendChild(titlediv);
          container.appendChild(wrapper);
          block.appendChild(container);
        } else {
          const errorMessage = ('Failed');
          block.appendChild(errorMessage);
        }  
    }
    
    //Event listners for applying filters
    const applyFiltersButton = document.getElementById('applyFiltersButton');
    applyFiltersButton.addEventListener('click', () => {
      applyFilters();
    });

    //Event listners for showingarchived Events
    const archivedEvents = document.getElementById('archivedEvents');
    archivedEvents.addEventListener('click', () => {
      showArchivedEvents();
    });
}

export default async function decorate(block) {
    await buildAutoBlocks(block);
    return block;
    
}

