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
  
  let priceCategory = `cheap for the price`
  
  if (productPrice > 20) {
    priceCategory = 'fair price'
  }
  
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
}

const prodName = 'JavaScript Course'
const prodPrice = 29.99

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput)