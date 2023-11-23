const button = document.querySelector('button');
const output = document.querySelector('p');

// introducing promises
const getPosition = (opts) => {
  const posPromise = new Promise((resolve, reject) => {
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
  return posPromise;
};

const setTimer = async (duration) => {
  // async on expressions
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!'); // fn executed by the browser, once the fn is complete.
    }, duration);
  });
  return timerPromise;
};

// promise chaining
async function trackUserHandler() {
  // async on declarations
  const posData = await getPosition();
  const timerData = await setTimer(2000); // await keyword.
  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log(timerData, posData);
}

button.addEventListener('click', trackUserHandler); // Async task, handed to the browser and handled by it.
