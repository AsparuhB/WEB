const button = document.querySelector('button');
const output = document.querySelector('p');

// introducing promises
const getPosition = (opts) => {
  const posPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {},
      opts
    );
  });
  return posPromise;
};

const setTimer = (duration) => {
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!'); // fn executed by the browser, once the fn is complete.
    }, duration);
  });
  return timerPromise;
};

// promise chaining
function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting position... Please wait.');
}

button.addEventListener('click', trackUserHandler); // Async task, handed to the browser and handled by it.
