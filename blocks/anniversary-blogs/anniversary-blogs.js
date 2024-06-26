import {
  div, a, p, h3,
} from '../../scripts/dom-builder.js';
import { createOptimizedPicture } from '../../scripts/aem.js';

async function fetchPostData() {
  try {
    const response = await fetch('/query-index.json');
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    return [];
  }
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
}

function createAnniversaryBlogCard(post) {
  const card = div({ class: 'blog-card' });
  const image = div(
    { class: 'blog-card-content' },
    a({
      href: post.path,
      title: post.title,
    }, createOptimizedPicture(post.image, post.title)),
  );
  const title = h3({ class: 'blog-title' }, post.title);
  const description = p({ class: 'blog-description' }, truncateText(post.description, 180));
  const readMore = a({ href: post.path, class: 'read-more' }, 'Read more >>');

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(readMore);
  return card;
}

function createAnniversaryBlogs(results, page = 1, pageSize = 10) {
  if (!results || !Array.isArray(results)) {
    return div({ class: 'blog-cards-container' });
  }
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults = results.slice(startIndex, endIndex);
  const container = div({ class: 'blog-cards-container' });
  paginatedResults.forEach((post) => {
    const card = createAnniversaryBlogCard(post);
    container.appendChild(card);
  });
  return container;
}

function getAnniversaryBlogPages(pages, currentPageUrl) {
  const anniversaryBlogPages = [];
  let count = 0;
  for (let i = 0; i < pages.length && count < 3; i += 1) {
    const pagePath = pages[i].path;
    if (!currentPageUrl.includes(pagePath)) {
      anniversaryBlogPages.push(pages[i]);
      count += 1;
    }
  }
  return anniversaryBlogPages;
}

export default async function decorate(block) {
  const postData = await fetchPostData();
  const hasChildClass = block.classList.contains('child');
  const wrapper = div({ class: 'content' });
  const blogsContainer = div({ class: 'col recent-blogs' });
  let sortedResults = [];
  const filteredResults = postData.filter((item) => item.path.includes('/advancing-every-day/'));
  if (filteredResults.length) {
    sortedResults = filteredResults.sort((ar1, ar2) => ar2.date - ar1.date);
  }
  if (hasChildClass) {
    const currentPageUrl = window.location.href;
    const childPages = getAnniversaryBlogPages(sortedResults, currentPageUrl);
    const blogCardsContainer = createAnniversaryBlogs(childPages);
    blogsContainer.appendChild(blogCardsContainer);
    wrapper.appendChild(blogsContainer);
  } else {
    const pageSize = 10;
    const shouldShowPagination = sortedResults.length > pageSize;
    const paginatedResults = createAnniversaryBlogs(sortedResults, 1);
    blogsContainer.appendChild(paginatedResults);
    wrapper.appendChild(blogsContainer);

    if (shouldShowPagination) {
      const totalResults = sortedResults.length;
      const totalPages = Math.ceil(totalResults / pageSize);
      const pagination = div({ class: 'pagination' });
      for (let i = 1; i <= totalPages; i += 1) {
        const pageLink = a({ href: '#', class: 'page-link', 'data-page': i }, i);
        pageLink.addEventListener('click', (event) => {
          event.preventDefault();
          const selectedPage = parseInt(event.target.dataset.page, 10);
          const newResults = createAnniversaryBlogs(sortedResults, selectedPage);
          blogsContainer.innerHTML = '';
          blogsContainer.appendChild(newResults);
        });
        pagination.appendChild(pageLink);
      }
      wrapper.appendChild(pagination);
    }
  }
  block.innerText = '';
  block.appendChild(wrapper);
}
