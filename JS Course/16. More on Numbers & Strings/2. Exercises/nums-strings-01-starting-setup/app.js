function randomIntBetween(min, max) {
  // min: 5 , max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 0,999999 => 1 is not included.
}

console.log(randomIntBetween(1, 10));

// TAGGED TEMPLATE Holy God!

function productDescription(strings, productName, productPrice) {
  console.log(strings)
  console.log(productName)
  console.log(productPrice)
  return "This is a product"
}

const prodName = 'JavaScript Course'
const prodPrice = 29.99

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput)