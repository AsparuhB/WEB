const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout((data) => {
        console.log(posData);
      }, 2000);
    },
    (err) => {
      console.log(err);
    }
  );
  setTimeout(() => {
    console.log('Timer done...');
  }, 0);
  console.log('Getting position...'); // this will be executed first.
}

button.addEventListener('click', trackUserHandler);
