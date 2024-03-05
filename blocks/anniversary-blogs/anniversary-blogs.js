import {
  div, a, img, p, h4,
} from '../../scripts/dom-builder.js';

import { readBlockConfig } from '../../scripts/aem.js';

async function fetchBlogsData() {
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

function createRecentPosts(results) {
  const lists = div({ class: 'posts' });
  results.forEach((post) => {
    const showcaseBanner = div({ class: 'post' });
    const articleCardImage = a({ class: 'image', href: post.path }, img({
      src: post.image, alt: post.title, width: '100%', height: 'auto',
    }));
    const articleCardBody = div({ class: 'text' });
    const articleHeading = h4({ class: 'entry-title' }, post.title);
    const articleDescription = p({ class: 'intro' }, truncateText(post.description, 180));
    const articleLink = p({ class: 'button-container' }, a({ href: post.path }, 'Read more...'));
    articleCardBody.appendChild(articleHeading);
    articleCardBody.appendChild(articleDescription);
    articleCardBody.appendChild(articleLink);
    if (post.image) {
      showcaseBanner.appendChild(articleCardImage);
    } else {
      showcaseBanner.classList.add('full-post');
    }
    showcaseBanner.appendChild(articleCardBody);
    lists.append(showcaseBanner);
  });
  return lists;
}

export default async function decorate(block) {
  const blockData = readBlockConfig(block);
  const blogsData = await fetchBlogsData();
  let topic = '';
  if (blockData.topic) {
    topic = blockData.topic;
  }
  const wrapper = div({ class: 'content flex cols2' });
  if (block.children[1]) {
    topic = block.children[0].innerText.trim();
  }
    const blogsContainer = div({ class: 'col anniversary-blogs' });
    let sortedResults = [];
    const filteredResults = blogsData.filter((item) => item.path.includes('/25th-anniversary/') && (topic ? JSON.parse(item.tags).filter((tag) => tag.toLowerCase().trim() === topic.toLowerCase().trim()).length > 0 : true));
    if (filteredResults.length) {
      sortedResults = filteredResults.sort((ar1, ar2) => ar2.date - ar1.date);
    }
    const postElement = createRecentPosts(sortedResults);
    blogsContainer.appendChild(postElement);
    wrapper.appendChild(blogsContainer);
  block.innerText = '';
  block.appendChild(wrapper);
}
