 // making a GET request
 const xhr = new XMLHttpRequest();

 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

 xhr.onload = function() {
  const listOfPosts = xhr.response;

};

 xhr.send();