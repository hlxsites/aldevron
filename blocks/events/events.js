/* eslint-disable no-undef */
import { createOptimizedPicture, capitalizeWords, toClassName } from '../../scripts/aem.js';
import {
  div, a, p, ul, li, article, span,
  label, input, h2,
  h3,
  nav,
  button,
} from '../../scripts/dom-builder.js';
import { formatDateRange } from '../../scripts/scripts.js';

const REGIONS = [
  'Europe',
  'North America',
];

const TYPES = [
  'Conference',
  'Events',
  'Webinar',
];

function filterUrl() {
  function getUrlParameter(name) {
    const newName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${newName}=([^&#]*)`);
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Get URL parameters
  const eventTypeParam = getUrlParameter('type');
  const regionParam = getUrlParameter('region');

  regionParam.split(',').forEach((region) => {
    // Select the checkbox with the ID that matches the region
    const regionCheckbox = document.getElementById(region);
    if (regionCheckbox) regionCheckbox.checked = true;
  });

  eventTypeParam.split(',').forEach((eventType) => {
    // Select the checkbox with the ID that matches the event type
    const typeCheckbox = document.getElementById(eventType);
    if (typeCheckbox) typeCheckbox.checked = true;
  });
}

async function fetchPostData() {
  try {
    const response = await fetch('/query-index.json');
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    return [];
  }
}

let currentPageNumber = 1;
const itemsPerPage = 10;

// Function to sort events based on their start dates
function sortEventsByDate(events) {
  // Sort events based on their start dates
  events.sort((dateA, dateB) => {
    // Convert start dates to Date objects for comparison
    const dateAnew = new Date(dateA.startdate * 1000);
    const dateBnew = new Date(dateB.startdate * 1000);

    // Compare dates
    if (dateAnew < dateBnew) {
      return -1; // dateA comes before dateB
    } if (dateAnew > dateBnew) {
      return 1; // dateA comes after dateB
    }
    return 0; // dates are equal
  });

  return events;
}

// Function to separate events based on current date and class parameter
function separateEventsByDate(events, currentDate, classParameter) {
  const futureEvents = [];
  const archivedEvents = [];
  events.forEach((event) => {
    const startDate = new Date((event.startdate - 25569) * 24 * 60 * 60 * 1000);
    const endDate = new Date((event.enddate - 25569) * 24 * 60 * 60 * 1000);

    if (startDate > currentDate || endDate > currentDate) {
      futureEvents.push(event);
    } else if (endDate < currentDate) {
      archivedEvents.push(event);
    }
  });

  return classParameter === 'future' ? futureEvents : archivedEvents;
}

async function generateEventDetails(articles) {
  const articleElements = articles.map((art) => {
    let date = '';
    const options = {
      month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC',
    };
    if (art.startdate && art.enddate) {
      const endDate = new Date((art.enddate - 25569) * 24 * 60 * 60 * 1000).toLocaleDateString('en-Us', options);
      const eventDate = art.startdate === art.enddate
        ? endDate : formatDateRange(art.startdate, art.enddate);
      date = (art.eventtime !== '') ? `${eventDate} ${art.eventtime}` : eventDate;
    }
    return article(
      { class: 'item' },
      div(
        { class: 'image' },
        a({
          href: art.path,
          title: art.title,
        }, createOptimizedPicture(art.image, art.title)),
      ),
      div(
        { class: 'content' },
        date ? p({ class: 'cite' }, date) : '',
        p(
          a({
            class: 'title',
            title: art.title,
            href: art.path,
          }, capitalizeWords(art.title)),
        ),
        ul(
          { class: 'keyword-list' },
          li({ class: 'item' }, art.type),
          li({ class: 'item' }, art.address !== art.region ? art.address : art.region),
          (art.address !== art.region ? li({ class: 'item' }, art.region) : ''),
        ),
      ),
    );
  });
  return articleElements;
}

// Function to update the events displayed based on filtering
function updateEvents(events) {
  // Clear the existing event list
  const itemsContainer = document.querySelector('.items');
  itemsContainer.innerHTML = '';

  // Generate and append new event details
  generateEventDetails(events).then((eventContent) => {
    const pageTitle = document.title;
    itemsContainer.appendChild(h2({ class: 'event-title' }, pageTitle));
    if (eventContent.length === 0) {
      const noEventsMesage = h3({ class: 'no-result' }, 'No Events Found');
      itemsContainer.appendChild(noEventsMesage);
    } else {
      eventContent.forEach((element) => {
        itemsContainer.appendChild(element);
      });
    }
  });
}

// Event listener function to handle checkbox changes
function handleCheckboxChange(eventData) {
  const checkedCheckboxes = document.querySelectorAll('.filter-item:checked');
  const selectedOptions = Array.from(checkedCheckboxes)
    .map((checkbox) => checkbox.nextSibling.textContent);
  let filteredEvents;
  // Filter events based on selected options
  const eventTypes = [];
  const regions = [];

  if (selectedOptions.length > 0) {
    selectedOptions.forEach((option) => {
      if (eventData.some((data) => data.type === option)) {
        eventTypes.push(option);
      } else if (eventData.some((data) => data.region === option)) {
        regions.push(option);
      }
    });

    if (eventTypes.length > 0 && regions.length === 0) {
      filteredEvents = eventData.filter((data) => eventTypes.includes(data.type));
    } else if (eventTypes.length === 0 && regions.length > 0) {
      filteredEvents = eventData.filter((data) => regions.includes(data.region));
    } else {
      filteredEvents = eventData.filter((data) => eventTypes
        .includes(data.type) && regions.includes(data.region));
    }

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete('types');
    if (eventTypes.length > 0) {
      urlParams.set('type', eventTypes.map((type) => type.toLowerCase()).join(','));
    } else {
      urlParams.delete('types');
    }

    if (regions.length > 0) {
      urlParams.delete('region');
      urlParams.set('region', regions.map((region) => region.toLowerCase().replace(/[+\s]/g, '-')).join(','));
    } else {
      urlParams.delete('region');
    }

    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  } else {
    filteredEvents = eventData;
  }

  updateEvents(filteredEvents);
  const paginationContainer = document.querySelector('.pagination');
  if (paginationContainer) paginationContainer.style.display = (filteredEvents.length <= itemsPerPage) ? 'none' : 'block';
}

function createEventsDropdown(eventName, options) {
  const container = div({ class: 'select' });
  container.setAttribute('name', eventName);

  const btn = div({
    type: 'button',
    class: 'dropdown-toggle',
    value: '',
  }, eventName);
  // btn.addEventListener('click', toggleFilter, false);
  container.append(btn);

  const dropDown = div({ class: 'dropdown-menu' });
  options.forEach((option) => {
    const fieldName = toClassName(option.toString());
    dropDown.append(label(
      { for: fieldName },
      input({
        type: 'checkbox',
        name: fieldName,
        id: fieldName,
        class: 'filter-item',
      }),
      span(option),
    ));
  });
  container.append(dropDown);

  return container;
}

function createLink(text, currentPage) {
  const linkHref = currentPage === 'events' ? '/about-us/archived-events' : '/about-us/events';
  const link = p(a({ href: linkHref, title: text }, text));
  return link;
}

async function buildSidePanel(currentPage, eventData) {
  const sidePanel = div({ class: 'filter' });
  const panelTitle = p({ class: 'panel-title' }, 'Filter By:');

  // Dropdowns
  const eventTypeDropdown = createEventsDropdown('Event Type', TYPES);
  const regionDropdown = createEventsDropdown('Region', REGIONS);

  // Append dropdowns to filter div
  const linkText = currentPage === 'events' ? 'Archived Events' : 'Upcoming Events';
  const link = createLink(linkText, currentPage);

  // Append filter div to side panel
  sidePanel.appendChild(panelTitle);
  sidePanel.appendChild(eventTypeDropdown);
  sidePanel.appendChild(regionDropdown);
  sidePanel.appendChild(link);

  const checkboxes = sidePanel.querySelectorAll('.select .dropdown-menu .filter-item');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      handleCheckboxChange(eventData);
    });
  });

  return sidePanel;
}

function updatePaginationButtons(currentPage) {
  document.querySelectorAll('.pagination .pager-item').forEach((data) => {
    data.classList.remove('active');
    if (parseInt(data.textContent, 10) === currentPage) {
      data.classList.add('active');
    }
  });
}

function displayPage(page, events) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageEvents = events.slice(startIndex, endIndex);
  updateEvents(currentPageEvents);
}

function handlePagination(page, events) {
  currentPageNumber = page;
  const filteredEvents = filterEvents(events, eventType, region);
  displayPage(currentPageNumber, filteredEvents); // Update UI with new page
}

function generatePaginationButtons(totalPages, currentPage, events) {
  const paginationContainer = nav({ class: 'pagination' });
  for (let i = 1; i <= totalPages; i += 1) {
    const pageButton = button({ class: 'pager-item' }, i);
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', () => {
      handlePagination(i, events);
      updatePaginationButtons(i);
    });
    paginationContainer.appendChild(pageButton);
  }
  return paginationContainer;
}

function getTotalPages(events) {
  return Math.ceil(events.length / itemsPerPage);
}

export default async function decorate(block) {
  const outerBlock = document.querySelector('.section');
  outerBlock.classList.add('outer');
  const postData = await fetchPostData();
  const page = window.location.pathname.includes('/events');
  const currentPage = page ? 'events' : 'archived-events';
  const filteredResults = postData.filter((item) => /events\/.*$/.test(item.path.toLowerCase()));
  const sortedEvents = sortEventsByDate(filteredResults);
  const currentDate = new Date();
  const classParameter = document.querySelector('.events.future') ? 'future' : 'archive';
  const eventsToshow = separateEventsByDate(sortedEvents, currentDate, classParameter);
  const itemsContainer = div({ class: 'items' });

  const eventContent = await generateEventDetails(eventsToshow);
  const sidePanel = await buildSidePanel(currentPage, eventsToshow);

  const wrapper = div({ class: 'list' });
  const pageTitle = document.title;
  const title = h2({ class: 'event-title' }, pageTitle);
  itemsContainer.append(title);
  wrapper.appendChild(sidePanel);
  if (eventContent && eventContent.length > 0) {
    eventContent.forEach((element) => {
      itemsContainer.appendChild(element);
    });
  } else {
    const noEventMessage = currentPage === 'events' ? 'No Upcoming Events' : 'No Archived Events';
    const noResults = h3({ class: 'no-result' }, noEventMessage);
    itemsContainer.appendChild(noResults);
    block.appendChild(itemsContainer);
  }

  wrapper.appendChild(itemsContainer);
  block.appendChild(wrapper);
  if (eventsToshow.length > itemsPerPage) {
    const totalPages = getTotalPages(eventsToshow);
    wrapper.appendChild(generatePaginationButtons(totalPages, currentPageNumber, eventsToshow));

    displayPage(currentPageNumber, eventsToshow);
  }

  filterUrl();
  handleCheckboxChange(eventsToshow);
}
