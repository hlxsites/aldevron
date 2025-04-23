import { getMetadata } from '../../scripts/aem.js';
import { div, a, img, li, ul, p, span} from '../../scripts/dom-builder.js';
 
/**
 * @param {string} text The text to format
 * @returns {string}
 */
function formatBreadcrumbText(text) {
  return text
}
 
/**
 * @param {HTMLElement} $block The main element
 */
export default async function decorate($block) {
  console.log("inside decorate breadcrumb");
  const jsonData = await fetchData();
  if (!jsonData || !jsonData.length) return;
 const url = window.location.href;
  const segments = new URL(url).pathname.split('/').filter(segment => segment !== '');
  const pathData = jsonData.map(item => ({
    path: item.path,
    title: item.title,
  }));
  const breadcrumbList = ul({});
  const baseUrl = window.location.origin;
 
  // Create Home breadcrumb item at the start (non-clickable but with a link to a constant URL)
  const homeItem = li({});
  const homeAnchor = a({href: window.location.origin});
  const homePicture = document.createElement('picture');
  const homeIcon = img({src: '/icons/home.svg', alt: 'Home', class: 'home-icon'});
  homePicture.appendChild(homeIcon);  
  homeAnchor.appendChild(homePicture);  
  homeItem.appendChild(homeAnchor);
  breadcrumbList.appendChild(homeItem);
  let path = '';
  const segmentsToDisplay = segments.slice(0, -1);
  for (let i = 0; i < segmentsToDisplay.length; i++) {
    path += '/' + segmentsToDisplay[i];
    const listItem = li({});
    const segmentPath = path;
 
    // Check if this segment path exists in the filtered json data
    const breadcrumbData = pathData.find(item => item.path === segmentPath);
 
    // Only create the breadcrumb if it exists in the JSON data
    if (breadcrumbData) {
      const anchor = a({href: baseUrl + segmentPath});
      const formattedText = formatBreadcrumbText(segmentsToDisplay[i]);
      const anchorspan = span({})
      anchorspan.textContent = formattedText;
      anchor.appendChild(anchorspan);
      listItem.appendChild(anchor);
      breadcrumbList.appendChild(listItem);
    }
  }
  // Last item: Current page (non-clickable and use the title from getMetadata)
  const lastBreadcrumbTitle = getMetadata('og:title');
    if (lastBreadcrumbTitle) {
    const constantTitleItem = li({});
    const spanTitle = span({});
    spanTitle.textContent = formatBreadcrumbText(lastBreadcrumbTitle);
    constantTitleItem.appendChild(spanTitle);
    breadcrumbList.appendChild(constantTitleItem);
  }
  // Append the breadcrumb list to the block
  $block.append(breadcrumbList);
}
/**
 * Fetches data from /query-index.json
 */
async function fetchData() {
  try {
    const response = await fetch('/query-index.json');
    const jsonData = await response.json();
    return jsonData.data || [];
  } catch (error) {
    console.error('Error fetching data from /query-index.json:', error);
    return [];
  }
}