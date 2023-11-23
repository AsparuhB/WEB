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

//promise chaining
async function trackUserHandler() {
  // async on declarations;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000); // await keyword.
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);

  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting Position...');
}

//  // using .then() and .catch() blocks.
// function trackUserHandler() {
//   let positionData;

//   getPosition()
//     .then((posData) => {
//       positionData = posData;
//       return setTimer(2000);
//     })
//     .catch((err) => {
//       console.log(err);
//       return 'on we go...';
//     })
//     .then((data) => {
//       console.log(data, positionData);
//     });
//   setTimer(1000).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('Getting position...');
// }

button.addEventListener('click', trackUserHandler); // Async task, handed to the browser and handled by it.

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});
