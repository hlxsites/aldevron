import { debounce, getMetadata } from '../../scripts/aem.js';
import {
  input, div, ul, li, span, a,
} from '../../scripts/dom-builder.js';

const windowWidth = document.body.offsetWidth;

function addClassesToMenuItems(element, depth) {
  const childItems = element.children;
  for (let i = 0; i < childItems.length; i += 1) {
    const item = childItems[i];
    // Add class to the immediate child element
    item.classList.add('hs-menu-item', `hs-menu-depth-${depth}`);
    const link = item.querySelector('a');
    const { parentElement } = link;
    if (parentElement.tagName.toLowerCase() === 'strong') {
      link.setAttribute('target', '_blank');
    }
    if (link && link.pathname === window.location.pathname) {
      item.classList.add('active');
    }
    const childElement = item.querySelector('ul');

    if (childElement?.children?.length > 0) {
      if (windowWidth < 961) {
        const spanElement = span({ class: 'arrow' });
        childElement.style.display = 'none';
        spanElement.addEventListener('click', () => {
          if (
            childElement.style.display === 'block'
            || childElement.style.display === ''
          ) {
            childElement.style.display = 'none';
            item.classList.remove('open');
          } else {
            childElement.style.display = 'block';
            item.classList.add('open');
          }
        });
        item.prepend(spanElement);
      }
      item.appendChild(link);
      item.appendChild(childElement);
      const nextDepth = depth + 1;
      addClassesToMenuItems(childElement, nextDepth);
    }
  }
}

function getRecentSearches() {
  const recentSearchesString = localStorage.getItem('coveo-recent-queries');
  const recentSearches = recentSearchesString ? JSON.parse(recentSearchesString) : [];
  //console.log('Recent Searches', recentSearches);
  return recentSearches.slice(0, 3);
}

// function setRecentSearches(value) {
//   console.log("set recent values", value);
//   const recentSearches = getRecentSearches();
//   if (recentSearches.length > 0) {
//     const searchValueIndex = recentSearches.findIndex((search) => search === value);
//     if (searchValueIndex > -1) recentSearches.splice(searchValueIndex, 1);
//   }
//   if (value !== '') recentSearches.push(value);
//   localStorage.setItem('coveo-recent-queries', JSON.stringify(recentSearches).slice(0, 3));
// }


function setRecentSearches(value) {
  console.log("set recent values", value);
  const recentSearches = getRecentSearches();
  const searchValueIndex = recentSearches.findIndex((search) => search === value);
  console.log("search value index",searchValueIndex);
  if (searchValueIndex > -1) recentSearches.splice(searchValueIndex, 1);
  recentSearches.unshift(value);
  localStorage.setItem('coveo-recent-queries', JSON.stringify(recentSearches.slice(0, 3)));
  console.log("set 3",localStorage.setItem('coveo-recent-queries', JSON.stringify(recentSearches.slice(0, 3))));
}

// function setRecentSearches() {
//   const value = document.querySelectorAll('.coveo-search').value;
//   const recentSearches = getRecentSearches();
//   const searchValueIndex = recentSearches.findIndex((search) => search === value);
//   if (searchValueIndex > -1) recentSearches.splice(searchValueIndex, 1);
//   recentSearches.unshift(value);
//   localStorage.setItem('coveo-recent-queries', JSON.stringify(recentSearches.slice(0, 3)));
// }

function onClickOfitems(value) {
  document.querySelectorAll('.coveo-search').forEach((inpEl, inpElIndex) => {
    // if (inpElIndex === 0) 
    //setRecentSearches(event.target.textContent);
    inpEl.value = value;
    console.log(inpEl.value, value);
    inpEl.focus();
    inpEl.click();
    submitSearchPage();
    //setTimeout(() => inpEl.parentElement.nextSibling.classList.add('show'), 1000);
  });
}

function submitSearchPage() {
  console.log('Submit Search Page');
  const inputValue = document.querySelector('.mobile-search .coveo-search')?.value?.trim();
  if (inputValue && inputValue !== '') {
    window.location = `${window.location.origin}/drafts/search#q=${inputValue}`;
  }
}

function toggleSearchDropdown(event, mode) {
  console.log("toggleSearchDropdown called");
  if (mode === 'focus') {
    event.target.parentElement.nextSibling.classList.add('show');
  } else if (mode === 'blur') {
    setTimeout(() => {
      event.target.parentElement.nextSibling.classList.remove('show');
    }, 500);
  }
}

async function addRecentSearch() {
  console.log('Add Recent Search');
  let recentSearches = getRecentSearches();
  console.log(recentSearches);
  if (recentSearches.length > 0) {
    recentSearches = recentSearches.reverse();
    const parentEls = document.querySelectorAll('div.coveo-search-dropdown-menu .all-recent-searches ul');
    console.log(parentEls);
    parentEls.forEach((parentEl) => {
     // parentEl.innerHTML = '';
      recentSearches.forEach((el) => {
        const item = li({ class: 'recent-search-item', onclick: (event) => onClickOfitems(el) });
        item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg> ${el}`;
        parentEl.prepend(item);
      });
    });
   }
}

async function buildSearchSuggestions(response) {
  const parentEls = document.querySelectorAll('div.coveo-search-dropdown-menu ul.suggestions');
  console.log(response);
  if (parentEls.length > 0) {
   // const recentSearches = getRecentSearches();
    parentEls.forEach((parentEl) => {
      parentEl.innerHTML = '';
      // if (recentSearches.length > 0)
      if (response && response.completions && response.completions.length > 0) {
        response?.completions?.forEach((el) => {
          if (el && el.expression) {
            const item = li({ onclick: (event) => onClickOfitems(el.expression) });
            item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg> ${el.expression}`;
            parentEl.append(item);
          }
        });
      }
    });
  }
}

async function fetchSuggestions(value) {
  try {
    const payload = {
      locale: 'en',
      pipeline: 'Aldevron Marketplace',
      searchHub: 'AldevronMainSearch',
      timezone: 'America/New_York',
      q: value,
      count: 4,
      referrer: '',
    };
    const accessToken = 'xx36c41356-a0e5-4071-bcae-d27539d778e2';
    const resp = await fetch(
      'https://danahernonproduction1892f3fhz.org.coveo.com/rest/search/v2/querySuggest',
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );
    const response = await resp.json();
    buildSearchSuggestions(response);
    addRecentSearch();
  } catch (error) {
    console.log('Error', error);
  }
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    const htmlElements = div();
    htmlElements.innerHTML = html;
    const childElements = htmlElements.querySelector('div');
    // decorate nav DOM
    const nav = document.createElement('header');
    nav.id = 'header';

    const outer = document.createElement('div');
    outer.classList.add('outer');
    nav.appendChild(outer);

    const logo = a({ id: 'logo', href: '/', ariaLabel: 'Aldevron Logo' });
    logo.innerHTML = childElements.children[0].innerHTML;
    outer.appendChild(logo);

    const headerNav = div({ id: 'header-nav' });

    const mobileNav = div(
      {
        id: 'mobile-nav',
        onclick: () => headerNav.classList.toggle('hover'),
      },
      span({ class: 'icon-menu' }),
    );

    const headerNavIn = div({ id: 'header-nav-in' });
    const headerInfo = div({ id: 'header-info' });

    const searchIcon = div({ onclick: submitSearchPage });
    searchIcon.innerHTML = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /><span class="sr-only">Search</span>';
    const customSearchDiv = div(
      {
        class: 'coveo-search-dropdown custom-search',
      },
      div(
        { class: 'coveo-searchbox' },
        input({
          type: 'text',
          class: 'coveo-search',
          placeholder: 'Search here...',
          onfocus: (event) => toggleSearchDropdown(event, 'focus'),
          //onblur: (event) => toggleSearchDropdown(event, 'blur'),
          onkeyup: debounce((event) => {
            if (event.keyCode === 13) {
              console.log("Enter pressed");
              submitSearchPage();
              setRecentSearches(event.target.value);
            } else {
              fetchSuggestions(event.target.value);
              document.querySelector('.mobile-search .coveo-search').value = event.target.value;
              if (event.target.value === '' && event.target.value ) {
                console.log("Inside keyup add recent searches!");
                addRecentSearch();
              }
              else {
                document.querySelectorAll('.all-recent-searches').forEach(recentEl => recentEl.remove());
                document.querySelectorAll('.recent-search-item').forEach(recentItemEl => {
                  console.log(recentItemEl);
                  recentItemEl.remove()
                }
                 );
              }
            }
          }, 300),
        }),
        searchIcon,
      ),
      div(
        {
          class: 'coveo-search-dropdown-menu',
          //onclick: buildSearchSuggestions,
        },
        div(
          { class: 'all-recent-searches' },
          ul(),
          span({ class: 'recent-searches' }, 'Recent Searches'),
          span({
            class: 'clear-recent-searches',
            onclick: (event) => {
              console.log("clear event called");
              localStorage.removeItem('coveo-recent-queries');
              document.querySelectorAll(".recent-search-item").forEach(e => e.parentNode.removeChild(e)
              );
              suggestions
              // setTimeout(() => {
              //   event.target.parentElement.parentElement.classList.add('show');
              // },510);
            },
          }, 'Clear'),
        ),
        ul({ 'aria-labelledby': 'coveo-searchbox', class: 'suggestions' }),
      ),
    );

    const clonedCustomSearchDiv = customSearchDiv.cloneNode(true);
    clonedCustomSearchDiv.classList.add('mobile-search');
    // Append the custom search div to the document body or any other parent element
    outer.appendChild(clonedCustomSearchDiv);
    customSearchDiv.classList.add('desktop-search');
    if (!window.location.pathname.includes('/drafts/search')) {
      headerInfo.appendChild(customSearchDiv);
    }
    const listElements = document.createElement('div');

    listElements.innerHTML = childElements.children[1].innerHTML;

    const elements = listElements.querySelectorAll('li');
    elements.forEach((liEl) => {
      const anchor = liEl.querySelector('a');
      if (anchor) {
        if (anchor.parentElement.tagName === 'STRONG') {
          anchor.setAttribute('target', '_blank');
        }
        // Get the first word of the anchor's inner text
        const firstWord = anchor.innerText.split(' ')[0].toLocaleLowerCase();
        // Set the first word as a class name
        anchor.classList.add(firstWord);
        // Append the modified anchor to headerInfo
        headerInfo.appendChild(anchor.cloneNode(true));
      }
    });
    // document.body.appendChild(headerInfo);
    const headerMenu = document.createElement('nav');
    headerMenu.id = 'menu';

    const menuWrapper = document.createElement('div');
    menuWrapper.id = 'hs_menu_wrapper_mainmenu';
    menuWrapper.classList.add(...'hs-menu-wrapper active-branch no-flyouts hs-menu-flow-horizontal'.split(' '));
    const menuList = childElements.children[2].innerHTML;

    // Create a temporary div element
    const tempDiv = document.createElement('ul');

    // Set the innerHTML of the temporary div
    tempDiv.innerHTML = menuList;

    // Find the ul element within the temporary div
    const menuListWrapper = tempDiv;

    // Append menuListWrapper to headerMenu
    menuWrapper.appendChild(menuListWrapper);
    headerMenu.appendChild(menuWrapper);

    // Add classes to menu items
    addClassesToMenuItems(menuListWrapper, 1);

    headerNavIn.appendChild(headerInfo);
    headerNavIn.appendChild(headerMenu);

    headerNav.appendChild(headerNavIn);
    headerNav.appendChild(mobileNav);
    outer.appendChild(headerNav);

    block.append(nav);

   // addRecentSearch();
    fetchSuggestions();
   
  }
}
