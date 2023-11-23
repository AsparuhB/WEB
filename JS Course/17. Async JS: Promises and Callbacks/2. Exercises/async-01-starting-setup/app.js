const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const positionPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return positionPromise;
};

const setTimer = (duration) => {
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return timerPromise;
};

// promise chaining.
function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(1000);
    })
    .catch((err) => {
      console.log(err);
      return "On we go..."
    })
    .then((data) => {
      console.log(data, positionData);
    }).finally(() => { // the .finally() is not necessary!
      console.log("That was all folks!")
    });
    
  setTimer(3000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...'); // this will be executed first.
  
}

button.addEventListener('click', trackUserHandler);
