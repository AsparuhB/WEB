// getting elements, so we can work with them.
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// making a GET request
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// configuring the responseType, so we can parse the JSON data.
xhr.responseType = 'json';

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  console.log(listOfPosts);

  //sorting the posts and appending them
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send();
