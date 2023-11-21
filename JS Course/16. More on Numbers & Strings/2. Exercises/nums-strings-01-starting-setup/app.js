function randomIntBetween(min, max) {
  // min: 5 , max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 0,999999 => 1 is not included.
}

console.log(randomIntBetween(1, 10));

// TAGGED TEMPLATE Holy God!

