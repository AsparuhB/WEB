const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      console.log(posData);
    },
    (err) => {
      console.log(err);
    }
  );
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);
