const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Timer Done!")
  }, 0)
  console.log('Getting position... Please wait.');
}

button.addEventListener('click', trackUserHandler); // Async task, handed to the browser and handled by it.
