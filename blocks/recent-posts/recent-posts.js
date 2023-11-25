import {
  div, a, img, p, h3,
} from '../../scripts/dom-builder.js';

import { readBlockConfig } from '../../scripts/aem.js';

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

function createRecentPosts(results) {
  const lists = div({ class: 'posts' });
  results.forEach((post) => {
    const showcaseBanner = div({ class: 'post' });
    const articleCardImage = a({ class: 'image', href: post.path }, img({
      src: post.image, alt: post.title, width: '100%', height: 'auto',
    }));
    const articleCardBody = div({ class: 'text' });
    const articleHeading = h3({ class: 'entry-title' }, a({ href: post.path }, post.title));
    const articleDescription = p({ class: 'intro' }, truncateText(post.description, 180));
    articleCardBody.appendChild(articleHeading);
    articleCardBody.appendChild(articleDescription);
    showcaseBanner.appendChild(articleCardImage);
    showcaseBanner.appendChild(articleCardBody);
    lists.append(showcaseBanner);
  });
  return lists;
}

export default async function decorate(block) {
  const blockData = readBlockConfig(block);
  const postData = await fetchPostData();
  const topic = blockData.topic || '';

  const wrapper = div({ class: 'content flex cols2' });

  // Function to process and append posts
  const processAndAppendPosts = (pathFilter, titleIndex) => {
    const titleNode = block.children[0].children[titleIndex]?.cloneNode(true);
    if (titleNode) {
      const blogsContainer = div({ class: 'col recent-posts' });
      const filteredAndSortedResults = postData
        .filter((item) => item.path.includes(pathFilter) && (!topic || item.tags.includes(topic)))
        .sort((ac, b) => b.date - ac.date)
        .slice(0, 3);
      const postElement = createRecentPosts(filteredAndSortedResults);
      blogsContainer.appendChild(titleNode);
      blogsContainer.appendChild(postElement);
      wrapper.appendChild(blogsContainer);
    }
  };

  // Process blog and news titles
  processAndAppendPosts('/news/', 0);
  processAndAppendPosts('/blog/', 1);

  block.innerText = '';
  block.appendChild(wrapper);
}
