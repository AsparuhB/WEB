const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return timerPromise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then((data) => {
        console.log(data, posData);
      });
    },
    (err) => {
      console.log(err);
    }
  );
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
  console.log('Getting position...'); // this will be executed first.
}

button.addEventListener('click', trackUserHandler);
