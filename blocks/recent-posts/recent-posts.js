import {
    div, h2, a, img, p, li, ul, h3,
  } from '../../scripts/dom-builder.js';

async function fetchPostData() {
    try {
      const response = await fetch('/query-index.json');
      const jsonData = await response.json();
      return jsonData.data;
    } catch (error) {
      return [];
    }
  }

function createRecentPosts(results) {
    const lists = ul({ class: 'posts' });
    console.log(results);
    results.forEach(post => {
        console.log(post);
        const showcaseBanner = li({ class: 'post' });
        const articleCardImage = a({class: 'article-card-img'}, img({ src: post.image, alt : post.title }) );
        const articleCardBody = div({ class: 'article-card-body' });
        const articleHeading = h3({ class: 'entry-title' }, a( post.title ));
        const articleDescription = p({ class: 'description' }, post.description);
        articleCardBody.appendChild(articleHeading);
        articleCardBody.appendChild(articleDescription);
        showcaseBanner.appendChild(articleCardImage);
        showcaseBanner.appendChild(articleCardBody);
        lists.append(post);
    })
    return  lists;
}

export default async function decorate(block) {
    const postData = await fetchPostData();
    console.log(postData);
    const wrapper = div({ class: 'wrapper' });
    [...block.children].forEach(children => {
        wrapper.appendChild(children);
        const anchor = children.querySelector('a');
        console.log(anchor);
        const url = new URL(anchor.href);
        console.log(url);
        console.log(url.pathname);
        let sortedResults = [];
        const filteredResults = postData.filter((item) => {
            // const path = item.path.toLowerCase();
            // const regex = `/^${url.pathname.replace('/',"\/")}.+/`;
            // console.log(regex);
            return item.path.includes(url.pathname);
        });
        if (filteredResults.length) {
            sortedResults = filteredResults.sort((ar1, ar2) => ar2.date - ar1.date);
          }
        console.log(filteredResults);
        const postElement = createRecentPosts(sortedResults.slice(0,3));
        console.log(postElement);
        wrapper.appendChild(postElement);
    })
    // wrapper.appendChild([...block.children]);
    block.appendChild(wrapper);
    console.log(block);
}