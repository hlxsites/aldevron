import { createOptimizedPicture, capitalizeWords, toClassName } from '../../scripts/aem.js';
import {
  div, a, p, ul, li, article, span,
  label, input, h2,
  h3,
  nav,
  button,
} from '../../scripts/dom-builder.js';
import { formatDateRange } from '../../scripts/scripts.js';

async function fetchPostData() {
  try {
    const response = await fetch('/drafts/query-index.json');
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
    const dateAnew = new Date(dateA.startDate * 1000);
    const dateBnew = new Date(dateB.startDate * 1000);

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
    const startDate = new Date(event.startDate * 1000);
    const endDate = new Date(event.endDate * 1000);

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
    if (art.startDate && art.endDate) {
      const endDate = new Date(art.endDate * 1000).toLocaleDateString('en-Us', { month: 'short', day: '2-digit', year: 'numeric' });
      date = art.startDate === art.endDate ? endDate : formatDateRange(art.startDate, art.endDate);
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
      const noEventsMesage = h3({ class: 'no-result' }, 'No Events Found!');
      itemsContainer.appendChild(noEventsMesage);
    } else {
      eventContent.forEach((element) => {
        itemsContainer.appendChild(element);
      });
    }
  });
}

// Event listener function to handle checkbox changes
function handleCheckboxChange(event, eventData) {
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
  } else {
    filteredEvents = eventData;
  }
  updateEvents(filteredEvents);
  const paginationContainer = document.querySelector('.pagination');
  if (filteredEvents.length <= itemsPerPage) {
    paginationContainer.style.display = 'none';
  } else {
    paginationContainer.style.display = 'block';
  }
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
  const linkHref = currentPage === 'events-calendar' ? '/drafts/archived-events' : '/drafts/events-calendar';
  const link = p(a({ href: linkHref, title: text }, text));
  return link;
}

async function buildSidePanel(currentPage, eventData) {
  const types = [...new Set(eventData.map((item) => item.type))].sort();
  const region = [...new Set(eventData.map((item) => item.region))].sort();
  const sidePanel = div({ class: 'filter' });
  const panelTitle = p({ class: 'panel-title' }, 'Filter By:');

  // Dropdowns
  const eventTypeDropdown = createEventsDropdown('Event Type', types);
  const regionDropdown = createEventsDropdown('Region', region);

  // Append dropdowns to filter div
  const linkText = currentPage === 'events-calendar' ? 'Archived Events' : 'Upcoming Events';
  const link = createLink(linkText, currentPage);

  // Append filter div to side panel
  sidePanel.appendChild(panelTitle);
  sidePanel.appendChild(eventTypeDropdown);
  sidePanel.appendChild(regionDropdown);
  sidePanel.appendChild(link);

  const checkboxes = sidePanel.querySelectorAll('.select .dropdown-menu .filter-item');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      handleCheckboxChange(event, eventData);
    });
  });

  return sidePanel;
}

function displayPage(page, events) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageEvents = events.slice(startIndex, endIndex);
  updateEvents(currentPageEvents);
  // Update UI with current page events
}

// Function to handle pagination navigation
function handlePagination(page, events) {
  currentPageNumber = page;
  displayPage(currentPageNumber, events); // Update UI with new page
}

function getTotalPages(events) {
  return Math.ceil(events.length / itemsPerPage);
}

export default async function decorate(block) {
  const postData = await fetchPostData();
  const page = window.location.pathname.includes('events-calendar');
  const currentPage = page ? 'events-calendar' : 'archived-events';
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
    const noEventMessage = currentPage === 'event-calendar' ? 'No Upcoming Events!' : 'No Archived Events!';
    const noResults = h3({ class: 'no-result' }, noEventMessage);
    itemsContainer.appendChild(noResults);
    block.appendChild(itemsContainer);
  }

  wrapper.appendChild(itemsContainer);
  block.appendChild(wrapper);
  if (eventsToshow.length > itemsPerPage) {
    const paginationContainer = nav({ class: 'pagination' });

    // Assuming you have "Next" and "Previous" buttons for pagination
    const totalPages = getTotalPages(eventsToshow);
    for (let i = 1; i <= totalPages; i += 1) {
      const pageButton = button({ class: 'pager-item' });
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => handlePagination(i, eventsToshow));
      paginationContainer.appendChild(pageButton);
    }
    wrapper.appendChild(paginationContainer);

    // Initial display of the first page of events

    displayPage(currentPageNumber, eventsToshow);
  }
}
