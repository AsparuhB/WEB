const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json'; // setting the responseType parses it automatically

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  console.log(listOfPosts)
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl)
  }
};

xhr.send();
