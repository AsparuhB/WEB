 // making a GET request
 const xhr = new XMLHttpRequest();

 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

 xhr.responseType = 'json'

 xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response
  console.log(listOfPosts);
};

 xhr.send();

 const listElemenenet = document.querySelector('.posts');
 const postTemplate = document.getElementById("single-post")
 